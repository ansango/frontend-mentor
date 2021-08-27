import style from "./ButtonPrimary.module.css";

export const ButtonPrimary = ({ label }) => {
  return <button className={style.btnPrimary}>{label}</button>;
};
