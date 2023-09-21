import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../Common/Button/Button';
import Circles from './Circles/Circles';
import NumberInput from './NumberInput/NumberInput';
import { GAME_STATUS, NUMBER_OF_ALLOWED_TRIALS, NUMBER_OF_DIGITS } from '../../Body.service';
import classes from './TrialRow.module.css';

const TrialRow = (props) => {

    //STATES & HOOKS------------------------------------------------------------------
    const [correctNumbersWithIndex, setCorrectNumbersWithIndex] = useState(0);
    const [correctNumbersOnly, setCorrectNumbersOnly] = useState(0);
    const [rowEnabled, setRowEnabled] = useState(false);
    const enteredNumberRef = useRef([]); //to get the entered number from the number input 

    useEffect(() => { //check to enable the row or not
        if (props.rowIndex === props.selectedIndex) {
            setRowEnabled(true);
        }
    }, [props.rowIndex, props.selectedIndex]);

    useEffect(() => { //check to clear the row or not
        if (props.clearScreen) {
            setCorrectNumbersWithIndex(0);
            setCorrectNumbersOnly(0);
            props.setClearScreen(false);
        }
        if (props.rowIndex !== 1) {
            setRowEnabled(false);
        }
    }, [props.clearScreen]);


    //FUNCTIONS-----------------------------------------------------------------
    const checkButtonClickHandler = () => {

        //get the entered number from the reference array
        const enteredNumberArray = [];
        for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
            enteredNumberArray[i] = enteredNumberRef.current[i].value;
        }

        const secretCodeArray = props.secretCode.toString().split(""); //convert the secretCode from number to array of digits
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
        if (correctNumbersIndexCount === NUMBER_OF_DIGITS) {
            props.setGameStatus(GAME_STATUS.WON); //finished the game successfully
        }
        else if (props.rowIndex === NUMBER_OF_ALLOWED_TRIALS) {
            props.setGameStatus(GAME_STATUS.LOST); //the game finished with a failure 
        }

        //set the results
        setCorrectNumbersWithIndex(correctNumbersIndexCount);
        setCorrectNumbersOnly(correctNumbersOnlyCount);

        //to enable the next row
        setRowEnabled(false);
        props.setSelectedIndex(props.selectedIndex + 1);
    };


    //JSX CODE-----------------------------------------------------------------
    return (
        <div className={classes.mainContainer}>

            {/* RENDER THE 4 NUMBER INPUT FIELDS*/}
            <div className={classes.secondaryContainer}>
                {Array(NUMBER_OF_DIGITS).fill().map((number, i) =>
                    <NumberInput key={i} ref={(el) => (enteredNumberRef.current[i] = el)} enableState={rowEnabled} clearScreen={props.clearScreen} />
                )}
            </div>

            <Button enableState={rowEnabled} buttonClickHandler={checkButtonClickHandler} type={"check"} />

            {/* RENDER THE RESULT IN CIRCLES*/}
            <Circles correctNumbersWithIndex={correctNumbersWithIndex} correctNumbersOnly={correctNumbersOnly} />

        </div>
    );
};

export default TrialRow;