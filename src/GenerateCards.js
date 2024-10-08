import logo from "./logo.svg";
import "./App.css";
import GenerateNumbersButton from "./generateNumbers";
//import Tables from "./Tables"
import { useState } from "react";
import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import NumberOfTables from "./NumberOfTables";
import DeleteNumbersButton from "./DeleteNumbersButton";
import App from "./App";

import { css } from "@emotion/css";

function GenerateCards() {
  const [tableValues, setTableValues] = useState([Array(25).fill(null)]);
  const [numberOfTables, setNumberOfTables] = useState(2);
  const [generationFlag, setGenerationFlag] = useState("generujCisla");

  function getRandomUniqueNumbers(min, max, count = 5) {
    const numbers = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  let triTabulky = [];

  const generateTable = (flag, tabulka) => {
    triTabulky = [];

    for (let i = 0; i <= tabulka; i++) {
      const bunky = Array(25).fill("");
      const bunky1 =
        flag === "prazdne" ? bunky.slice(0, 5) : getRandomUniqueNumbers(1, 15);
      const bunky2 =
        flag === "prazdne"
          ? bunky.slice(5, 10)
          : getRandomUniqueNumbers(16, 30);
      const bunky3 =
        flag === "prazdne"
          ? bunky.slice(10, 15)
          : getRandomUniqueNumbers(31, 45);
      const bunky4 =
        flag === "prazdne"
          ? bunky.slice(15, 20)
          : getRandomUniqueNumbers(46, 60);
      const bunky5 =
        flag === "prazdne"
          ? bunky.slice(20, 25)
          : getRandomUniqueNumbers(61, 75);

      bunky3.splice(2, 1, "Free");

      const concatenatedArray = [
        ...bunky1,
        ...bunky2,
        ...bunky3,
        ...bunky4,
        ...bunky5,
      ];

      const redSquares = [0, 4, 6, 8, 12, 16, 18, 20, 24];

      const items = [];

      const markedCells = css`
        background-color: var(--farba-red-squares);

        @media print {
          background-color: var(--farba-red-squares) !important;
        }
      `;

      for (let i = 0; i <= 4; i++) {
        let start = i;
        items.push(<tr key={`row-${i}`}></tr>);
        for (let j = start; j <= concatenatedArray.length - 1; j += 5) {
          if (!redSquares.includes(j)) {
            items.push(<td key={`cell-${i}-${j}`}>{concatenatedArray[j]}</td>);
          } else {
            items.push(
              <td key={`cell-${i}-${j}`} className={markedCells}>
                {concatenatedArray[j]}
              </td>
            );
          }
        }
      }

      const styleTable = css`
        border-spacing: 0;
        border-collapse: collapse;

        th,
        td {
          border: 1px solid black;
          text-align: center;
          padding: 0.25rem;
          height: 1.4rem;
          min-width: 1.4rem;
        }
      `;

      const styleThead = css`
        background-color: var(--farba-BINGO-nadpis);
        color: white;
        font-weight: bold;

        @media print {
          background-color: transparent;
          color: black;
        }
      `;

      triTabulky.push(
        <>
          <div key={i} className="table-container">
            <table className={styleTable}>
              <thead className={styleThead}>
                <tr>
                  <th>B</th>
                  <th>I</th>
                  <th>N</th>
                  <th>G</th>
                  <th>O</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </div>
        </>
      );
    }

    return triTabulky;
  };

  //console.log("tritabulky", triTabulky);

  useEffect(() => {
    setTableValues(generateTable(generationFlag, numberOfTables - 1));
  }, [numberOfTables]);

  const handleClickGeneruj = () => {
    setTableValues(generateTable("generujCisla", numberOfTables - 1));
    setGenerationFlag("generujCisla");
  };

  const handleClickVymaz = () => {
    setTableValues(generateTable("prazdne", numberOfTables - 1));
    setGenerationFlag("prazdne");
  };

  const functionNumberOfTables = (valueEvent) => {
    let parsedValueEvent = parseInt(valueEvent, 10);

    if (parsedValueEvent > 100) {
      parsedValueEvent = 100;
    } else if (parsedValueEvent < 1) {
      parsedValueEvent = 1;
    }

    setNumberOfTables(parsedValueEvent);
    // setTableValues(generateTable("generujCisla", parseInt(numberOfTables)-1));
  };



  const styleBigDiv = css`
    width: 80vw;
    margin: auto;

    max-width: 1000px;
  `;

  const styleDivButtons = css`
    display: flex;
    width: 50%;
    min-width: 35rem;

    margin: 2.5rem auto;
    justify-content: space-evenly;
    align-items: center;

    @media print {
      display: none;
    }
  `;

  const tableWrapper = css`
    margin: 0 auto;
    width: 50%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 750px;
    justify-content: center;
    padding-bottom: 3rem;

    @media print {
      padding-bottom: 1rem;
    }
  `;

  return (
    <>
      <h1>Vytvor si BINGO kartičky 😀</h1>
      <div className={styleBigDiv}>
        <div className={styleDivButtons}>
          <GenerateNumbersButton handleClickGeneruj={handleClickGeneruj} />
          <DeleteNumbersButton handleClickVymaz={handleClickVymaz} />

          <NumberOfTables
            numberOfTables={functionNumberOfTables}
            value={numberOfTables}
          />
        </div>

        <div className={tableWrapper}>
          {tableValues.map((element) => {
            return element;
          })}
        </div>
      </div>
    </>
  );
}

export default GenerateCards;
