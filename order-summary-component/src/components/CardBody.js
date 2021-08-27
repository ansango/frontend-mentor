import style from "./CardBody.module.css";
import icon from "../images/icon-music.svg";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonBlank } from "./ButtonBlank";

export const CardBody = () => {
  return (
    <div className={style.body}>
      <h3>Order Summary</h3>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className={style.product}>
        <img src={icon} />
        <div className={style.info}>
          <h4>Annual Plan</h4>
          <small>$59.99/year</small>
        </div>
        <a>Change</a>
      </div>
      <div className={style.actions}>
        <ButtonPrimary label="Proceed to Payment" />
        <ButtonBlank label="Cancel Order" />
      </div>
    </div>
  );
};
