function Checkbox({name, value, htmlFor, label, onChangeHandler}) {

    const checkHandler =(e) => {
        onChangeHandler(e);
    }
  return (
    <>
      <div className="brand-item">
        <input type="checkbox" name={name} value={value}  onChange={checkHandler}/>
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    </>
  );
}

export default Checkbox;