import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/favourites" element={<Favourites />} />
          </Routes>
      </Router>
  );
}

export default App;
