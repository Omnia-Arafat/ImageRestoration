import React, { useState, useEffect } from 'react';
import MainContent from '../components/MainContent.jsx';
import Navbar from '../components/Navbar/Navbar.tsx';
import robot from '../assets/Images/robot.png';

const Home = () => {
  const [effectWordIndex, setEffectWordIndex] = useState(0);
  const effectWords = ['Inpaint', 'Denoise', 'Deblur'];

  useEffect(() => {
    const interval = setInterval(() => {
      setEffectWordIndex((prevIndex) => (prevIndex + 1) % effectWords.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home-container'>
      <h1 className='welcome-text'>
        Welcome to Image Restoration here you can
      </h1>
      <h1 className='welcome-text-p2'>
        <span style={{
          fontWeight: 'bold',
          textShadow: '0 0 10px #0048fe',
          transition: 'text-shadow 0.3s ease'
        }}>
          {effectWords[effectWordIndex]}
        </span> your Image
      </h1>
      <a href="dashboard" className="glow-button">Let's Start !</a>
      <img className='robot-image' src={robot} alt="Description of the image" />  
    </div>
  );
};

export default Home;
