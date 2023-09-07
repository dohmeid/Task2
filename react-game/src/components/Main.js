import { useState } from 'react';
import StartButton from './Buttons/StartButton';
import classes from './Main.module.css';
import Trail from './Trial/Trial';

function Main() {

    //STATES-------------------------------------------------------------------
    const [secretCode, setSecretCode] = useState("0000");
    const [enableState, setEnableState] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    //FUNCTIONS-----------------------------------------------------------------
    function generateRandomNumber(min, max) {
        //generate number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startButtonClickHandler() {
        setSecretCode(generateRandomNumber(1000, 9999));
        setEnableState(true);
        setSelectedIndex(1);
    };

    return (
        <div className={classes.mainContainer}>

            <div className={`${classes.item}`}>
                <Trail index={1} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={2} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={3} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={4} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={5} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={6} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={7} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                <Trail index={8} enableState={enableState} setEnableState={setEnableState} secretCode={secretCode}
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            </div>

            <div className={`${classes.item} ${classes.container3}`}>
                <div className={classes.text}>
                    <p>Secret code</p>
                    <p>{secretCode}</p>
                </div>
                <StartButton startButtonClickHandler={startButtonClickHandler} />
            </div>

        </div>
    );
}

export default Main;

/*

<Trail 
index={0} 
selectedIndex={selectedIndex}, setSelectedIndex={setSelectedIndex}
enableState={enableState} setEnableState={setEnableState} 
secretCode={secretCode}
/>

*/