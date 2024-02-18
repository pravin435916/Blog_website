// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex justify-between">
            <li>
              <Link to="/" className="text-xl font-bold">Home</Link>
            </li>
            <li>
              <Link to="/create" className="text-xl font-bold">Create Post</Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
