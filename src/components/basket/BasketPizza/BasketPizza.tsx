import { useTypedDispatch } from "data/hooks";
import { IPizza } from "types";
import { Icon } from "components";
import {
  decreasePizzaCount,
  increasePizzaCount,
  removePizza,
} from "data/redux/features/pizzas/pizzasSlice";
import cx from "classnames";
import s from "./BasketPizza.module.scss";


interface IBasketBlockProps{
  pizza: IPizza;
}
function BasketBlock({pizza}: IBasketBlockProps) {
  const dispatch = useTypedDispatch();

  const onIncreasePizzaCount = (id: number) => {
    dispatch(increasePizzaCount(id));
  };

  const onDecreasePizzaCount = (id: number) => {
    dispatch(decreasePizzaCount(id));
  };

  const onRemovePizza = (id: number) => {
    console.log("onRemovePizza");
    dispatch(removePizza(id));
  };

  return (
    <div className={s.pizza} key={pizza.id}>
      <div className={s.pizza__img}>
        <img src={pizza.imageUrl} alt="Pizza" />
      </div>
      <div className={s.pizza__info}>
        <h3>{pizza.title}</h3>
        <p>__ тесто, __ см.</p>
      </div>
      <div className={s.pizza__count}>
        <button
          className={cx(
            "button button--outline button--circle",
            s.pizza__count_minus
          )}
          onClick={() => onDecreasePizzaCount(pizza.id)}
          // TODO fx as number everywhere !
          disabled={(pizza.count as number) <= 1 ? true : false}
        >
          <Icon icon="minus" color="primary" />
        </button>
        <b>{pizza.count}</b>
        <button
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
        <b>{pizza.sum} ₽</b>
      </div>
      <div className={s.pizza__remove}>
        <button
          className="button button--outline button--circle"
          onClick={() => onRemovePizza(pizza.id)}
        >
          <Icon icon="cross" color="primary" />
        </button>
      </div>
    </div>
  );
}

export default BasketBlock;
