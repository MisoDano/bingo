import GenerateNumbersButton from "./generateNumbers";
import Tables from "./Tables";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import NumberOfTables from "./NumberOfTables";
import DeleteNumbersButton from "./DeleteNumbersButton";
import GenerateCards from "./GenerateCards";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PlayBingo from "./PlayBingo";

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/bingo" : "";
  return (
    <>
      <Router basename={basename}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<GenerateCards />} />
            <Route path="/hraj-bingo" element={<PlayBingo />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
