import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import React from 'react';
import WordSearch from './WordSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/search/:word" element={<WordSearch/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
