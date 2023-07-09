import cx from "classnames";
import { Link } from "react-router-dom";

import { Icon } from "components";
import s from "./BasketFooter.module.scss";
import BasketFooterHOC from "./BasketFooterHOC";

interface IBasketFooter{
  basketCount: number;
  basketSum: number;
}

function BasketFooterComponent({basketCount, basketSum}: IBasketFooter) {
  return (
    <div className={s.basketFooter}>
      <div className={s.basketFooter__details}>
        <span>
          {" "}
          Всего пицц: <b>{basketCount} шт.</b>{" "}
        </span>
        <span>
          {" "}
          Сумма заказа: <b>{basketSum} ₽</b>{" "}
        </span>
      </div>
      <div className={s.basketFooter__buttons}>
        <Link
          to="/"
          className={cx("button button--outline button--add", s.back)}
        >
          <Icon icon="arrowLeft" />

          <span>Вернуться назад</span>
        </Link>

        <div className={cx("button", s.pay)}>
          <span>Оплатить сейчас</span>
        </div>
      </div>
    </div>
  );
}

const BasketFooter = BasketFooterHOC(BasketFooterComponent);
export default BasketFooter;
