const Input = ({ children, inputTitle, inputId, isError, errorMessage }) => {

  const inputClassName = isError ? 'input_error' : '';


  return (
    <div className={`form_field ${inputClassName}`}>
      <label id={`${inputId}Label`} htmlFor={inputId}>{inputTitle}</label>
      {children}
      {isError && errorMessage ? (
        <span className="error_msg">{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default Input;
