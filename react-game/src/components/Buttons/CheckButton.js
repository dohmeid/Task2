import { useState } from 'react';
import classes from './Button.module.css';

function CheckButton({ enableState, checkButtonClickHandler,
    index, selectedIndex, setSelectedIndex }) {

    const [disabled, setDisabled] = useState(true);

    if (index === selectedIndex && enableState === true) {
        setSelectedIndex(index + 1);
        setDisabled(false);
    }

    return (
        <>
            <button className={classes.button} disabled={disabled} onClick={() => checkButtonClickHandler} >Check</button>
        </>
    );
}

export default CheckButton;