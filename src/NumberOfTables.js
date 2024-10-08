import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GenerateNumbersButton from "./generateNumbers";
import { useState } from "react";
import GenerateCards from "./GenerateCards";
import { css } from "@emotion/css";

const NumberOfTables = ({ numberOfTables, value }) => {


  const styledLabel = css`
    color: var(--farba-labels);
    font-weight: bold;
    margin-right: 0.5rem;
  `;

  const styledInput = css`
    border: 1px solid var(--farba-labels);
    border-radius: 10%;`

  return (
    <>
      <div>
        <label className={styledLabel} for="numberInput">
          Počet kartičiek:
        </label>
        <input
          className={styledInput}
          id="numberInput"
          type="number"
          value={value}
          min="0"
          max="15"
          placeholder="max 15"
          onChange={(event) => numberOfTables(event.target.value)}
        ></input>
      </div>
    </>
  );
};

export default NumberOfTables;
