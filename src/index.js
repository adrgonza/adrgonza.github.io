// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 uses `ReactDOM.createRoot`
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Updated imports
import Home from './pages/Home/Home.js';  // Assuming your Home component is inside src/pages/Home/Home.js

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation (optional for SPA) */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        {/* Routes (v6 uses Routes instead of Switch) */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
