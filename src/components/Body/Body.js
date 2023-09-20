import React, { useState, useEffect } from 'react';
import Trials from './Trials/Trials';
import Results from './Results/Results';
import GAME_STATUS from './Body.service';
import classes from './Body.module.css';

const Body = () => {

    //STATES & HOOKS-------------------------------------------------------------------
    const [secretCode, setSecretCode] = useState("0000");
    const [selectedIndex, setSelectedIndex] = useState(0); //this state holds the current enabled row  
    const [gameStatus, setGameStatus] = useState(GAME_STATUS.NOT_STARTED);
    const [resultText, setResultText] = useState(""); //the result text that indicates if the user won or lost the game
    const [clearScreen, setClearScreen] = useState(true); //to reset the screen when the user starts the game again


    useEffect(() => { //control the status of the game
        switch (gameStatus) {
            case GAME_STATUS.ACTIVE:    //this restarts the game and clears the screen
                setResultText("");
                setSecretCode(generateRandomNumber(1000, 9999)); //set a new random secret code
                setSelectedIndex(1); //to enable the first row again
                setClearScreen(true);
                break;

            case GAME_STATUS.WON:
                setResultText("Congrats, You won the game!");
                break;

            case GAME_STATUS.LOST:
                setResultText("Game Over, You lost the game :(");
                break;

            default:
                break;
        }
    }, [gameStatus]);


    //FUNCTIONS-----------------------------------------------------------------
    const generateRandomNumber = (min, max) => { //generate number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const startButtonClickHandler = () => { //to start the game
        setGameStatus(GAME_STATUS.ACTIVE);
    };


    //JSX CODE-----------------------------------------------------------------
    return (
        <div className={classes.mainContainer}>

            {/* RENDER THE 8 ROWS*/}
            <Trials selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}
                secretCode={secretCode}
                setGameStatus={setGameStatus}
                clearScreen={clearScreen} setClearScreen={setClearScreen} />

            {/* RENDER THE RESULTS/START SECTION*/}
            <Results resultText={resultText} gameStatus={gameStatus} secretCode={secretCode}
                startButtonClickHandler={startButtonClickHandler} />

        </div>
    );
};

export default Body;