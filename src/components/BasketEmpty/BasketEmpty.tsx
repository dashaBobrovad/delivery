import emptyCartImg from "../../shared/img/empty-cart.png";

import s from "./BasketEmpty.module.scss";
import cx from "classnames";

function BasketEmpty() {
  return (
    <div className="container container_cart">
      <div className={cx(s.cart, s.cart_empty)}>
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    </div>
  );
}

export default BasketEmpty;
