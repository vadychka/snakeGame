import './Button.css';

const Button =
  ({ children, onClickBtn, style = '' }) => {
    return (
      <button className={`btn ${style}`} onClick={onClickBtn}>
        {children}
      </button>
    );
  };

export default Button;