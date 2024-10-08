import logo from "./logo.svg";
import "./App.css";
import GenerateNumbersButton from "./generateNumbers";
import Tables from "./Tables";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import NumberOfTables from "./NumberOfTables";
import DeleteNumbersButton from "./DeleteNumbersButton";
import App from "./App";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/css";

const Navbar = () => {
  const location = useLocation();

  const styledLink = css`
    display: inline-block;
    position: fixed;
    top: 5vh;
    left: 5vw;
    width: auto;

    @media print {
      display: none;
    }

    /*     @media (max-width: 600px) {
      max-width: 200px;
      word-wrap: break-word;
      font-size: 1rem;
    } */

    & > a {
      margin: 1rem;

      border: 1px solid var(--farba-navbar-border);
      background-color: var(--farba-navbar);
      color: var(--farba-navbar-text);

      border-radius: 20% / 100%;
      padding: 0.5rem;
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 600px) {
        max-width: 200px;
        word-wrap: break-word;
        font-size: 1rem;
      }

      &:hover {
        background-color: var(--farba-navbar-text);
        color: var(--farba-navbar);
      }
    }
  `;

  return (
    <>
      {location.pathname === "/" && (
        <div className={styledLink}>
          <Link to="/hraj-bingo">Zahraj si BINGO!</Link>
        </div>
      )}

      {location.pathname === "/hraj-bingo" && (
        <div className={styledLink}>
          <Link to="/">Vytvor si kartičky</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
