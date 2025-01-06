import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Home from "./Home";
import NewBlog from "./Newblog";
import Image from "./Gallary";
import NewImage from "./NewImage";

const App = () => {
  // State to manage an array of blog data
  const [blogs, setBlogs] = useState([]);
  // State to manage uploaded images
  const [images, setImages] = useState([]);

  // Handle blog submission
  const handleBlogSubmit = (data) => {
    setBlogs((prevBlogs) => [...prevBlogs, data]); // Add new blog to the array
  };

  // Function to add new image to the gallery
  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blogim!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newblog">
                  New Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/image">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newimage">
                  New Image
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/newblog" element={<NewBlog onBlogSubmit={handleBlogSubmit} />} />
        <Route path="/image" element={<Image images={images} />} />
        <Route path="/newimage" element={<NewImage addImage={addImage} />} />
      </Routes>
    </Router>
  );
};

export default App;