import { useState, useRef } from 'react';
import CheckButton from '../Buttons/CheckButton';
import WhiteCircle from '../Circles/WhiteCircle';
import BlueCircle from '../Circles/BlueCircle';
import Number from './Number';
import classes from './Trial.module.css';

function Trail({ enableState, setEnableState, secretCode,
    index, selectedIndex, setSelectedIndex }) {

    //STATES-------------------------------------------------------------------
    const [correctNumberWithIndex, setcorrectNumberWithIndex] = useState(0);
    const [correctNumberOnly, setcorrectNumberOnly] = useState(0);

    const num1 = useRef(null);
    const num2 = useRef(null);
    const num3 = useRef(null);
    const num4 = useRef(null);

    //FUNCTIONS-----------------------------------------------------------------
    const checkButtonClickHandler = () => {

        setEnableState(false);
        setSelectedIndex(selectedIndex + 1);

        console.log(num1.current.value
            + num2.current.value
            + num3.current.value
            + num4.current.value);

        var s = secretCode.toString().split("");

        let count1 = 0;
        let count2 = 0;

        s.forEach(function (character, index) {

            console.log(character + index);
            if ((index === 0 && character === num1.current.value) || (index === 1 && character === num2.current.value) ||
                (index === 2 && character === num3.current.value) || (index === 3 && character === num4.current.value)) {
                count1++;
                console.log("adding circle blue");
            }
            else if (character === num1.current.value || character === num2.current.value ||
                character === num3.current.value || character === num4.current.value) {
                count2++;
                console.log("adding circle ");
            }
        });

        console.log("count1 " + count1);
        console.log("count2 " + count2);
        setcorrectNumberWithIndex(count1);
        setcorrectNumberOnly(count2);
        console.log("correctNumberWithIndex: " + { correctNumberWithIndex });
        console.log("correctNumberOnly: " + { correctNumberOnly });
        console.log("done");

    };

    return (
        <div className={classes.container1}>
            <div className={classes.container2}>
                <Number ref={num1} enableState={enableState}
                    index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <Number ref={num2} enableState={enableState}
                    index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <Number ref={num3} enableState={enableState}
                    index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <Number ref={num4} enableState={enableState}
                    index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            </div>

            <CheckButton enableState={enableState} checkButtonClickHandler={checkButtonClickHandler}
                index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

            <div className={classes.container2}>
                {Array(correctNumberWithIndex).fill().map((x1, i) =>
                    <BlueCircle key={i} />
                )}
                {Array(correctNumberOnly).fill().map((x2, j) =>
                    <WhiteCircle key={j} />
                )}
            </div>
        </div>
    );

}

export default Trail;