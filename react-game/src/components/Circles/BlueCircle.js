import classes from './Circle.module.css'

function BlueCircle() {
    return (
        <span className={`${classes.dot} ${classes.blueCircle}`}></span>
    );
}

export default BlueCircle;