import logo from './logo.svg';
import './App.css';
import GenerateNumbersButton from "./generateNumbers"
import Tables from "./Tables"
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import NumberOfTables from "./NumberOfTables";
import DeleteNumbersButton from "./DeleteNumbersButton";
import GenerateCards from "./GenerateCards";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import PlayBingo from "./PlayBingo"





function App() {

 
  return (
  <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<GenerateCards />} />
          <Route path="/hraj-bingo" element={<PlayBingo />} />
         </Routes>
         
      </div>
    </Router>
   
  </>)
}

export default App;
