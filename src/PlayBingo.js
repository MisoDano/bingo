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
import PlayBingoButtons from "./PlayBingoButtons";

import RefactorBoardOfNumbers from "./RefactorBoardOfNumbers";
import { css } from "@emotion/css";

const PlayBingo = () => {
  const [numberOfSeconds, setNumberOfSeconds] = useState(5);
  const [valueOfNumbers, setValueOfNumberss] = useState("");
  const [stopStart, setStopStart] = useState("reset");
  const [selectedLanguage, setSelectedLanguage] = useState("sk-SK");
  const [count, setCount] = useState(0);
  const [countSaved, setCountSaved] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const generujNahodneCisla = () => {
    const rangeArray = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const mapaHodnot = {
      B: rangeArray(1, 15),
      I: rangeArray(16, 30),
      N: rangeArray(31, 45),
      G: rangeArray(46, 60),
      O: rangeArray(61, 75),
    };

    //return console.log("mapahodnot", mapaHodnot);

    const pismenoACislo = (cislo) => {
      let result;
      Object.values(mapaHodnot).forEach((value, index) => {
        if (value.includes(cislo)) {
          result = `${Object.keys(mapaHodnot)[index]}-${cislo}`;
        }
      });

      return result;
    };

    const numbersTo75 = rangeArray(1, 75).map((element) =>
      pismenoACislo(element)
    );

    const zamiesajArr = (arr = numbersTo75) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    const pomiesanyArray = zamiesajArr();

    //return pomiesanyArray;
    pomiesanyArray.splice(
      74,
      1,
      `${pomiesanyArray[74]}. ${
        selectedLanguage === "sk-SK" ? "Koniec hry. 😊" : "End of game. 😊"
      }`
    );

    return pomiesanyArray;
  };

  /*const startSpeaking = () => {
        const hodnotyDiktovanychCisiel = generujNahodneCisla();

        return (
          <div>
            <div>Tu sú čísla: </div><br></br>
            {hodnotyDiktovanychCisiel}
          </div>
        )
    }*/

  const handleSeconds = (valueEvent) => {
    let parsedValueEvent = parseInt(valueEvent, 10);

    if (parsedValueEvent > 10) {
      parsedValueEvent = 10;
    } else if (parsedValueEvent < 1) {
      parsedValueEvent = 1;
    }

    setNumberOfSeconds(parsedValueEvent);
    // setTableValues(generateTable("generujCisla", parseInt(numberOfTables)-1));
  };

  const handleStart = () => {
    setValueOfNumberss(generujNahodneCisla());
    setStopStart((prevStopStart) => "start");
    setCount((prev) => 0);
  };
  const handleReset = () => {
    setStopStart("reset");
    setCount((prev) => 0);
  };

  const handleEndGame = () => {
    setStopStart("koniecHry");
  };

  const handlePause = () => {
    stopStart === "start" || stopStart === "pokracuj"
      ? setStopStart("pauza")
      : setStopStart("pokracuj");
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event);
  };

  const styledDiv = css`
    margin: auto;
  `;

  return (
    <div className={styledDiv}>
      <h1>Pusti si čísla! 🙂</h1>
      <div>
        <PlayBingoButtons
          handleStart={handleStart}
          handleSeconds={handleSeconds}
          numberOfSeconds={numberOfSeconds}
          handleReset={handleReset}
          handleLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
          stopStart={stopStart}
          handlePause={handlePause}
        />
      </div>

      <div>
        <RefactorBoardOfNumbers
          valueOfNumbers={valueOfNumbers}
          numberOfSeconds={numberOfSeconds}
          stopStart={stopStart}
          selectedLanguage={selectedLanguage}
          handleReset={handleReset}
          handleEndGame={handleEndGame}
          handlePause={handlePause}
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
};

export default PlayBingo;
