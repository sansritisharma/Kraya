function Button (props) {
    const {classText,buttonText, value,element1,element2, isDisabled, handleClick} = props;
    const btnClickHandler = () => {
        if (handleClick) {
            handleClick();
        }
    }

    return (
        <button className={classText} value={value} onClick = {btnClickHandler} disabled={isDisabled} >
            {element1 && <span>{element1}</span>}{buttonText}{element2 && <span>{element2}</span>}
        </button>
    )
};
export default Button;