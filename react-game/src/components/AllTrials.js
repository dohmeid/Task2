import { useState, useEffect } from 'react';
import StartButton from './Buttons/StartButton';
import classes from './AllTrials.module.css';
import TrialRow from './TrialRow/TrialRow';

function AllTrials() {

    //STATES & HOOKS-------------------------------------------------------------------
    const [secretCode, setSecretCode] = useState("0000");
    const [selectedIndex, setSelectedIndex] = useState(0); //this state holds the current enabled row  
    const [gameStatus, setGameStatus] = useState(0); // 0 - means the game has not started yet 
    // 1 - means the game is active
    // 2 - means the game finished successfully
    // 3 - means the game finished with a failure 
    const [resultText, setResultText] = useState(""); //the result text that indicates if the user won or lost the game
    const [clearScreen, setClearScreen] = useState(true); //to reset the screen when the user starts the game again


    useEffect(() => { //control the status of the game
        if (gameStatus === 1) { //this restarts the game and clears the screen
            setResultText("");
            setSecretCode(generateRandomNumber(1000, 9999)); //set a new random secret code
            setSelectedIndex(1); //to enable the first row again
            setClearScreen(true);
        }
        else if (gameStatus === 2) {
            setResultText("Congrats, You won the game!");
        }
        else if (gameStatus === 3) {
            setResultText("Game Over, You lost the game :(");
        }
    }, [gameStatus]);


    //FUNCTIONS-----------------------------------------------------------------
    function generateRandomNumber(min, max) { //generate number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startButtonClickHandler() { //to start the game
        setGameStatus(1);
    };


    //JSX CODE-----------------------------------------------------------------
    return (
        <div className={classes.mainContainer}>

            <div className={`${classes.row}`}> {/* RENDER THE 8 ROWS*/}
                {Array(8).fill().map((row, i) =>
                    <TrialRow key={i} rowIndex={i + 1} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} secretCode={secretCode}
                        setGameStatus={setGameStatus} clearScreen={clearScreen} setClearScreen={setClearScreen} />
                )}
            </div>

            <div className={`${classes.row} ${classes.resultSection}`}> {/* RENDER THE RESULTS/START SECTION*/}
                <div className={classes.text}>
                    <p>{resultText}</p>
                    <p>Secret code</p>
                    {(gameStatus === 2 || gameStatus === 3) && <p>{secretCode}</p>}
                </div>
                <StartButton handleClick={() => startButtonClickHandler()} />
            </div>

        </div>
    );
}

export default AllTrials;