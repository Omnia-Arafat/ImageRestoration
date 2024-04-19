import Home from "../pages/Home";

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
// createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         // {
//         //   path: "contact",
//         //   element: <Contact />,
//         // },
//         // {
//         //   path: "dashboard",
//         //   element: <Dashboard />,
//         //   loader: ({ request }) =>
//         //     fetch("/api/dashboard.json", {
//         //       signal: request.signal,
//         //     }),
//         // },
//         // {
//         //   element: <AuthLayout />,
//         //   children: [
//         //     {
//         //       path: "login",
//         //       element: <Login />,
//         //       loader: redirectIfUser,
//         //     },
//         //     {
//         //       path: "logout",
//         //       action: logoutUser,
//         //     },
//         //   ],
//         // },
//       ],
//     },
//   ]);