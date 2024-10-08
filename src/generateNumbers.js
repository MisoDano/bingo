import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tables from "./Tables";
import GenerateCards from "./GenerateCards";
import styled from "styled-components";
import { css } from "@emotion/css";

const GenerateNumbersButton = ({ handleClickGeneruj }) => {



  return (
    <button className="tlacitka" onClick={handleClickGeneruj}>Generuj čísla</button>
  );
};

export default GenerateNumbersButton;
