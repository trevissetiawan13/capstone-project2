import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Programming from './pages/Programming';
import Covid19 from './pages/Covid19';
import Saved from './pages/Saved';
import NewsDetail from './pages/NewsDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/covid-19" element={<Covid19 />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/news-detail/:url" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;