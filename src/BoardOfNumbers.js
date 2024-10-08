import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tables from "./Tables"
import PlayBingo from "./PlayBingo";
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import axios from 'axios';




const BoardOfNumbers = ({ valueOfNumbers, numberOfSeconds, stopStart, selectedLanguage, handleEndGame }) => {
    const [count, setCount] = useState(0);
    const [countSaved, setCountSaved] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [currentNumbers, setCurrentNumbers] = useState([]);
    //const [previousStopStart, setPreviousStopStart] = useState("start")
    //console.log(valueOfNumbers);


    const API_KEY = 'AIzaSyC-V6Wa3gfsiEE5thSDjyjLuIDTBVmJi6U';


    
    const speakText = async (text, languageCode) => {
        const response = await axios.post(
          `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`,
          {
            input: { text: text },
            voice: {
              languageCode: languageCode, // 'sk-SK' for Slovak or 'en-US' for English
              ssmlGender: 'MALE'
            },
            audioConfig: {
              audioEncoding: 'MP3'
            }
          }
        );
    
        const audioContent = response.data.audioContent;
        const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
        audio.play();
      };

   //console.log("valueofNumbers", valueOfNumbers);

    useLayoutEffect(() => {

        let interval = null; // Declare the interval variable

        // If stopStart is "start", start the interval
        if (stopStart === "start" || stopStart === "pokracuj") {

          if (intervalId) {
             clearInterval(intervalId);
           }
          
          if(stopStart === "start") {
            setCount((prevCount) => 0);
          setCountSaved(0);
        console.log("start")}
          interval = setInterval(() => {
            setCount(prevCount => {
              if (prevCount < valueOfNumbers.length - 1) {
                
                
                
                return prevCount + 1; // Increment count
              } else {
                clearInterval(interval);
                 // Stop interval at the end of the array
                handleEndGame();
                return prevCount;
              }
            }
                );

                setCountSaved(prev=> {
                if (prev < valueOfNumbers.length - 1 )  
                  {return prev+1}
                else {
                  return prev
                }}
                
                 ); 
          }, numberOfSeconds * 1000);
             setIntervalId(interval);
      }   

      if (stopStart === "reset") {
        if (intervalId) clearInterval(intervalId);
        setIntervalId(null); // Clear interval on stop/reset
        setCount(0); // Reset the count to 0
        setCountSaved(0);
      }

      if (stopStart === "koniecHry"){
        if (intervalId){ clearInterval(intervalId);
          setIntervalId(null);
          //setCount(0);
        }
      }

      if (stopStart === "pauza"){
        if (intervalId) clearInterval(intervalId);
      }
    
      
      return () => {
        clearInterval(interval); // Cleanup to prevent memory leaks
      };
    }, [stopStart, numberOfSeconds]);




    const convertNumberToSlovakWords = (number) => {
        const numberToWordsMapSK = {
          1: "jeden", 2: "dva", 3: "tri", 4: "štyri", 5: "päť", 6: "šesť", 7: "sedem", 8: "osem", 9: "deväť",
          10: "desať", 11: "jedenásť", 12: "dvanásť", 13: "trinásť", 14: "štrnásť", 15: "pätnásť",
          16: "šestnásť", 17: "sedemnásť", 18: "osemnásť", 19: "devätnásť", 20: "dvadsať",
          21: "dvadsať jeden", 22: "dvadsať dva", 23: "dvadsať tri", 24: "dvadsať štyri", 25: "dvadsať päť",
          26: "dvadsať šesť", 27: "dvadsať sedem", 28: "dvadsať osem", 29: "dvadsať deväť", 30: "tridsať",
          31: "tridsať jeden", 32: "tridsať dva", 33: "tridsať tri", 34: "tridsať štyri", 35: "tridsať päť",
          36: "tridsať šesť", 37: "tridsať sedem", 38: "tridsať osem", 39: "tridsať deväť", 40: "štyridsať",
          41: "štyridsať jeden", 42: "štyridsať dva", 43: "štyridsať tri", 44: "štyridsať štyri", 45: "štyridsať päť",
          46: "štyridsať šesť", 47: "štyridsať sedem", 48: "štyridsať osem", 49: "štyridsať deväť", 50: "päťdesiat",
          51: "päťdesiat jeden", 52: "päťdesiat dva", 53: "päťdesiat tri", 54: "päťdesiat štyri", 55: "päťdesiat päť",
          56: "päťdesiat šesť", 57: "päťdesiat sedem", 58: "päťdesiat osem", 59: "päťdesiat deväť", 60: "šesťdesiat",
          61: "šesťdesiat jeden", 62: "šesťdesiat dva", 63: "šesťdesiat tri", 64: "šesťdesiat štyri", 65: "šesťdesiat päť",
          66: "šesťdesiat šesť", 67: "šesťdesiat sedem", 68: "šesťdesiat osem", 69: "šesťdesiat deväť", 70: "sedemdesiat",
          71: "sedemdesiat jeden", 72: "sedemdesiat dva", 73: "sedemdesiat tri", 74: "sedemdesiat štyri", 75: "sedemdesiat päť"
        };
        return numberToWordsMapSK[number] || number.toString();
      };
    
      // Format the text properly for Slovak: Remove '-' and convert number to words
      const formatTextForSlovak = (text) => {
        const [letter, number] = text.split('-');
        const numberInWords = convertNumberToSlovakWords(parseInt(number, 10));

        if (text.includes("Koniec hry")) {
            return `${letter} ${numberInWords}. Koniec hry`;  // Ensure proper separation
          }
        return `${letter} ${numberInWords}`;
      };


      const convertNumberToEnglishWords = (number) => {
        const numberToWordsMapEN = {
          1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
          10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
          16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
          21: "twenty-one", 22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five",
          26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine", 30: "thirty",
          31: "thirty-one", 32: "thirty-two", 33: "thirty-three", 34: "thirty-four", 35: "thirty-five",
          36: "thirty-six", 37: "thirty-seven", 38: "thirty-eight", 39: "thirty-nine", 40: "forty",
          41: "forty-one", 42: "forty-two", 43: "forty-three", 44: "forty-four", 45: "forty-five",
          46: "forty-six", 47: "forty-seven", 48: "forty-eight", 49: "forty-nine", 50: "fifty",
          51: "fifty-one", 52: "fifty-two", 53: "fifty-three", 54: "fifty-four", 55: "fifty-five",
          56: "fifty-six", 57: "fifty-seven", 58: "fifty-eight", 59: "fifty-nine", 60: "sixty",
          61: "sixty-one", 62: "sixty-two", 63: "sixty-three", 64: "sixty-four", 65: "sixty-five",
          66: "sixty-six", 67: "sixty-seven", 68: "sixty-eight", 69: "sixty-nine", 70: "seventy",
          71: "seventy-one", 72: "seventy-two", 73: "seventy-three", 74: "seventy-four", 75: "seventy-five"
        };
        return numberToWordsMapEN[number] || number.toString();
      };
      
      // Format the text properly for English: Remove '-' and convert number to words
      const formatTextForEnglish = (text) => {
        const [letter, number] = text.split('-');
        const numberInWords = convertNumberToEnglishWords(parseInt(number, 10));

        if (text.includes("End of game")) {
            return `${letter} ${numberInWords}. End of game`;  // Ensure proper separation
          }
        return `${letter} ${numberInWords}`;
      };
   

      useEffect(() => {
        console.log("speechcount", count);
        if ((stopStart === "start" || stopStart === "pokracuj") && valueOfNumbers[count]) {
          const numberValue = valueOfNumbers[count];
    
          // If selected language is Slovak, format the text accordingly
          const utteranceText = selectedLanguage === 'sk-SK'
            ? formatTextForSlovak(numberValue)
            : formatTextForEnglish(numberValue);

            console.log("speech");
            console.log("count", count);
    
          // Speak the number using Google TTS
          speakText(utteranceText, selectedLanguage);
        }
      }, [count, stopStart, selectedLanguage]);


      useLayoutEffect(() => {

        const soFarNumbersArray = valueOfNumbers.slice(0, countSaved);
        setCurrentNumbers(soFarNumbersArray);
        
    }, [countSaved]);  // Update currentNumbers when count changes

      

/*
      useEffect(() => {
        if (stopStart === "stop") {
          if (intervalId) clearInterval(intervalId); // Clear interval on stop/reset
          setCount(0); // Reset the count to 0
        }
      }, [stopStart]);
*/

  //const renderText = stopStart === "stop" ? <div></div> : <div>{valueOfNumbers[count]}</div>

  const renderText = stopStart === "reset" ? (
    <div></div>
  ) : (
    <>
    <div>{`Kolo: ${countSaved+1}`}</div>
    <div>
      {`${valueOfNumbers[countSaved]}`}
    </div></>
  );

    return (
        <>
      <div>
        <div>Tu sú čísla:</div>
        <br />
        <div>{console.log("countSaved", countSaved)}</div>
        {renderText}
      </div>
      <div>
      {Array.isArray(currentNumbers) && currentNumbers.slice().reverse().map((element, index) => (
  <span key={index}>{index!==currentNumbers.length-1 ? `${element}` : element}</span>  // Key is required here
))}</div>
        
      </>
    );
  };
  
  export default BoardOfNumbers;