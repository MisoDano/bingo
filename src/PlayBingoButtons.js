import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tables from "./Tables";
import PlayBingo from "./PlayBingo";
import { Button, Container } from "react-bootstrap";
import { css } from "@emotion/css";

const PlayBingoButtons = ({
  handleStart,
  numberOfSeconds,
  handleSeconds,
  handleReset,
  handleLanguageChange,
  selectedLanguage,
  stopStart,
  handleEndGame,
  handlePause,
}) => {
  const startPauseReset = css`
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    margin: 2.5rem auto;
    
    width: 70%;
    
    
  `;

  const velkyDiv = css`
    margin: auto;
    width: 50%;
  
  `;

  const sekundy = css`
    margin: auto;
    width: 50%;
    display: flex;
    justify-content: center;

    label {
      margin-right: 0.5rem;
    }
  `;

  const jazyk = css`
    margin: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    label {
      margin-left: 1rem;
    }

    input {
      margin-right: 0.5rem;
    }
  `;

  return (
    <div className={velkyDiv}>
      <div className={startPauseReset}>
        <button
          onClick={handleStart}
          className="tlacitka-play-bingo"
          hidden={
            stopStart === "start" ||
            stopStart === "pauza" ||
            stopStart === "pokracuj"
          }
        >
          ŠTART NOVEJ HRY
        </button>
        <button
          onClick={handlePause}
          className="tlacitka-play-bingo tlacitka-hrajuce"
          hidden={stopStart === "reset" || stopStart === "koniecHry"}
        >
          {stopStart === "start" || stopStart === "pokracuj"
            ? "PAUZA"
            : "POKRAČUJ"}
        </button>
        <button
          onClick={handleReset}
          className="tlacitka-play-bingo tlacitka-hrajuce"
          hidden={stopStart === "reset" || stopStart === "koniecHry"}
        >
          RESET
        </button>
      </div>
      <div className={sekundy}>
        <label>Počet sekúnd medzi číslami:</label>
        <input
          type="number"
          value={numberOfSeconds}
          min="1"
          max="10"
          placeholder="max 10"
          disabled={
            stopStart === "start" ||
            stopStart === "pauza" ||
            stopStart === "pokracuj"
          }
          onChange={(event) => handleSeconds(event.target.value)}
        ></input>
      </div>

      <div className={jazyk}>
        <label>
          <input
            type="radio"
            value="sk-SK"
            disabled={
              stopStart === "start" ||
              stopStart === "pauza" ||
              stopStart === "pokracuj"
            }
            checked={selectedLanguage === "sk-SK"}
            onChange={(event) => handleLanguageChange(event.target.value)}
          />
          Slovenčina
        </label>

        <label>
          <input
            type="radio"
            value="en-US"
            disabled={
              stopStart === "start" ||
              stopStart === "pauza" ||
              stopStart === "pokracuj"
            }
            checked={selectedLanguage === "en-US"}
            onChange={(event) => handleLanguageChange(event.target.value)}
          />
          Angličtina
        </label>
      </div>
    </div>
  );
};

export default PlayBingoButtons;
