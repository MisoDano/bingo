import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tables from "./Tables";
import GenerateCards from "./GenerateCards";
import styled from "styled-components";
import { css } from "@emotion/css";

const DeleteNumbers = ({ handleClickVymaz }) => {
 

  return (
    <button className="tlacitka" onClick={handleClickVymaz}>
      Vymaž čísla
    </button>
  );
};

export default DeleteNumbers;
