import cx from "classnames";

import { Icon, Picture } from "components";

import s from "./BasketPizza.module.scss";
import { IBasketPizzaComponent } from "./types";
import BasketPizzaHOC from "./BasketPizzaHOC";

function BasketPizzaComponent({
  onIncreasePizzaCount,
  onDecreasePizzaCount,
  onRemovePizza,
  pizza,
}: IBasketPizzaComponent) {
  return (
    <div className={s.pizza} key={pizza.id}>
      <div className={s.pizza__img}>
        <Picture src={pizza.imageUrl} alt="Pizza" parentClass={s.img} />
      </div>
      <div className={s.pizza__info}>
        <h3>{pizza.title}</h3>
        <p>
          {pizza.type || "__"} тесто, {pizza.size || "__"} см.
        </p>
      </div>
      <div className={s.pizza__count}>
        <button
          type="button"
          className={cx(
            "button button--outline button--circle",
            s.pizza__count_minus
          )}
          onClick={() => onDecreasePizzaCount(pizza.id)}
          // TODO fx as number everywhere !
          disabled={(pizza.count as number) <= 1}
        >
          <Icon icon="minus" color="primary" />
        </button>
        <b>{pizza.count}</b>
        <button
          type="button"
          className={cx(
            "button button--outline button--circle",
            s.pizza__count_plus
          )}
          onClick={() => onIncreasePizzaCount(pizza.id)}
        >
          <Icon icon="plus" color="primary" />
        </button>
      </div>
      <div className={s.pizza__price}>
        <b>{pizza.sum || 0} ₽</b>
      </div>
      <div className={s.pizza__remove}>
        <button
          type="button"
          className="button button--outline button--circle"
          onClick={() => onRemovePizza(pizza.id)}
        >
          <Icon icon="cross" color="primary" />
        </button>
      </div>
    </div>
  );
}

export default BasketPizzaHOC(BasketPizzaComponent);
