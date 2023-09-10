import classes from './Circle.module.css'

function BlueCircle(props) {
    return (
        <>
            <span className={`${classes.circle} ${classes.blueCircle}`}></span>
        </>
    );
}

export default BlueCircle;