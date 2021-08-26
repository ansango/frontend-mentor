import style from "./Card.module.css";
import { CardHero } from "./CardHero";
import heroImg from "../images/illustration-hero.svg";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <div className={style.card}>
      <CardHero imgUrl={heroImg} imgAlt="hero" />
      <CardBody />
    </div>
  );
};
