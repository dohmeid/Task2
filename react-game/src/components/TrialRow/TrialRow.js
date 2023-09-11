import { useState, useRef, useEffect } from 'react';
import CheckButton from '../Buttons/CheckButton';
import WhiteCircle from '../ResultCircles/WhiteCircle';
import BlueCircle from '../ResultCircles/BlueCircle';
import EnteredNumber from './EnteredNumber';
import classes from './Trial.module.css';


function TrialRow({ rowIndex, selectedIndex, setSelectedIndex, secretCode, setGameStatus, clearScreen, setClearScreen }) {

    //STATES & HOOKS------------------------------------------------------------------
    const [correctNumberWithIndex, setcorrectNumberWithIndex] = useState(0);
    const [correctNumberOnly, setcorrectNumberOnly] = useState(0);
    const [rowEnabled, SetRowEnabled] = useState(false);
    const enteredNumberRef = useRef([]); //to get the entered number from the number input 

    useEffect(() => { //check to enable the row or not
        if (rowIndex === selectedIndex) {
            SetRowEnabled(true);
            if (rowIndex === 1) {
                console.log("The secret code is: " + secretCode);
            }
        }
    }, [rowIndex, selectedIndex]);

    useEffect(() => { //check to clear the row or not
        if (clearScreen === true) {
            setcorrectNumberWithIndex(0);
            setcorrectNumberOnly(0);
            setClearScreen(false);
        }
        if (rowIndex !== 1) {
            SetRowEnabled(false);
        }
    }, [clearScreen]);



    //FUNCTIONS-----------------------------------------------------------------
    const checkButtonClickHandler = () => {

        //get the entered number from the reference array
        const enteredNumberArray = [];
        for (let i = 0; i < 4; i++) {
            enteredNumberArray[i] = enteredNumberRef.current[i].value;
        }

        var secretCodeArray = secretCode.toString().split(""); //convert the secretCode from number to array of digits
        let correctNumbersIndexCount = 0;
        let correctNumbersOnlyCount = 0;

        //compare the secretCode with the entered number
        secretCodeArray.forEach(function (digit, index) {
            if (digit === enteredNumberArray[index]) { //correct number in the correct place case
                correctNumbersIndexCount++;
                enteredNumberArray[index] = -1; //set the correct number to -1 to avoid a problem caused by duplicate entered numbers 
            }
            else { //check if the number is correct besides the index 
                for (let i in enteredNumberArray) {
                    if (digit === enteredNumberArray[i]) {
                        correctNumbersOnlyCount++;
                        enteredNumberArray[i] = -1; //set the correct number to -1 to avoid a problem caused by duplicate entered numbers 
                        break;
                    }
                }
            }
        });

        //check if the game finished
        if (correctNumbersIndexCount === 4) {
            setGameStatus(2); //finished the game successfully
        }
        else if (rowIndex === 8) {
            setGameStatus(3); //the game finished with a failure 
        }

        //set the results
        setcorrectNumberWithIndex(correctNumbersIndexCount);
        setcorrectNumberOnly(correctNumbersOnlyCount);

        //to enable the next row
        SetRowEnabled(false);
        setSelectedIndex(selectedIndex + 1);
    };



    //JSX CODE-----------------------------------------------------------------
    return (
        <div className={classes.mainContainer}>

            <div className={classes.secondaryContainer}>  {/* RENDER THE 4 NUMBER INPUT FIELDS*/}
                {Array(4).fill().map((number, i) =>
                    <EnteredNumber key={i} ref={(el) => (enteredNumberRef.current[i] = el)} enableState={rowEnabled} clearScreen={clearScreen} />
                )}
            </div>

            <CheckButton enableState={rowEnabled} checkButtonClickHandler={() => checkButtonClickHandler()} />

            <div className={classes.secondaryContainer}> {/* RENDER THE CIRCLE RESULTS*/}
                {Array(correctNumberWithIndex).fill().map((blueCircle, i) =>
                    <BlueCircle key={i} />
                )}
                {Array(correctNumberOnly).fill().map((whiteCircle, j) =>
                    <WhiteCircle key={j} />
                )}
            </div>

        </div>
    );
}

export default TrialRow;