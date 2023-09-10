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
    const enteredNumber = useRef([]); //to get the entered number from the number input 

    useEffect(() => { //check to enable the row or not
        if (rowIndex === selectedIndex) {
            SetRowEnabled(true);
        }
    }, [rowIndex, selectedIndex]);

    useEffect(() => { //check to clear the row or not
        if (clearScreen === true) {
            setcorrectNumberWithIndex(0);
            setcorrectNumberOnly(0);
            setClearScreen(false);
        }
        if (rowIndex != 1) {
            SetRowEnabled(false);
        }
    }, [clearScreen]);


    //FUNCTIONS-----------------------------------------------------------------
    const checkButtonClickHandler = () => {

        //get the entered number
        let num1 = enteredNumber.current[0].value;
        let num2 = enteredNumber.current[1].value;
        let num3 = enteredNumber.current[2].value;
        let num4 = enteredNumber.current[3].value;
        console.log("The entered number is: " + num1 + num2 + num3 + num4);
        console.log("The secret code is: " + secretCode);

        var secretCodeArray = secretCode.toString().split(""); //convert the secretCode from number to array of digits
        let correctNumbersIndexCount = 0;
        let correctNumbersOnlyCount = 0;

        secretCodeArray.forEach(function (digit, index) {
            if ((index === 0 && digit === num1) || (index === 1 && digit === num2) ||
                (index === 2 && digit === num3) || (index === 3 && digit === num4)) {
                correctNumbersIndexCount++;
            }
            else if (digit === num1 || digit === num2 || digit === num3 || digit === num4) {
                correctNumbersOnlyCount++;
            }
        });

        if (correctNumbersIndexCount === 4) {
            setGameStatus(2); //finished the game successfully
        }
        else if (rowIndex === 8) {
            setGameStatus(3); //the game finished with a failure 
        }

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
                    <EnteredNumber key={i} ref={(el) => (enteredNumber.current[i] = el)} enableState={rowEnabled} clearScreen={clearScreen} />
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