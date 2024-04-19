import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const InpaintUploader = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [processedImagePath, setProcessedImagePath] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // No initial HTTP request in this component
  }, []);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    const fileInput = document.getElementById('foto-file');
    fileInput.click();
  };

  const processImage = async () => {
    try {
      setLoading(true); // Start loading
      const formData = new FormData();
      formData.append('image', imageSrc);

      console.log('Sending image to server...');
      const response = await axios.post('http://your-backend-url/process-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response data:', response.data);

      if (!response.data) {
        throw new Error('Empty response from server');
      }

      console.log('Received response:', response.data);
      setProcessedImagePath(response.data.path);
      Swal.fire({
        icon: 'success',
        title: 'Image Processed Successfully!',
        text: 'Your image has been processed successfully.'
      });
    } catch (error) {
      console.error('Error processing image:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error processing image. Please try again.'
      });
    } finally {
      setLoading(false); // Stop loading
      console.log('Process image completed.');
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div>
      <div className="file-upload-section" onClick={handleClick}>
        <input
          type="file"
          name=""
          id="foto-file"
          className="photo-file"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <button type="button" className="custom-button">
          Select Image <FaCloudUploadAlt style={{ marginLeft: '5px' }} />
        </button>
      </div>

      <div className="image-container">
        {imageSrc && <img src={imageSrc} alt="" className="photo-image-class" />}
      </div>
      <div className="image-container2">
        {processedImagePath && (
          <img src={processedImagePath} alt="" className="photo-image-class" />
        )}
      </div>

      <button onClick={processImage} className='upload-image'> Upload Image</button>

      {/* Loader */}
      <ClipLoader color={'#36D7B7'} loading={loading} css={override} size={50} />
    </div>
  );
};

export default InpaintUploader;
