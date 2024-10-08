import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GenerateCards from "./GenerateCards";
import GenerateNumbersButton from "./generateNumbers"
import { useState } from 'react';

const Tables = ({tableValues}) => {
  
return <div>{tableValues}</div>
}

export default Tables