import './App.css';
import React from 'react';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Bookmark from './pages/Bookmark';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => (
  <div className="App">
   <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/book/:id" element={<BookDetail/>}/>
            <Route path="/bookmark" element={<Bookmark/>}/>
        </Routes>
    </Router>
  </div>
);

