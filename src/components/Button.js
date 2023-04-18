import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.btn}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;