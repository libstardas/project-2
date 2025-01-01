import style from "./Button.module.css";
export const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? style.outline_btn : style.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};
