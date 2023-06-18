import cx from "classnames";
import { Link } from "react-router-dom";

import { useTypedSelector } from "data/hooks";
import { Icon } from "components";
import s from "./BasketFooter.module.scss";

function BasketFooter() {
  const basketCount = useTypedSelector((state) => state.pizzas.basket.count);
  const basketSum = useTypedSelector((state) => state.pizzas.basket.sum);

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

export default BasketFooter;
