import style from "./CardHero.module.css";

export const CardHero = ({ imgUrl, imgAlt }) => {
  return (
    <div className={style.hero}>
      <img src={imgUrl} alt={imgAlt} />
    </div>
  );
};
