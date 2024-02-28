import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
// import RootLayout from './pages/Root.js'

/*
const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { path: '/', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  
}
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/Login" element={<Login />} />,
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
  
}

export default App;