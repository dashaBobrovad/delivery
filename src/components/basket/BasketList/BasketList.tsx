import s from "./BasketList.module.scss";
import cx from "classnames";
import { Icon } from "components";
import { useTypedDispatch, useTypedSelector } from "data/hooks";
import {
  decreasePizzaCount,
  increasePizzaCount,
} from "data/redux/features/pizzas/pizzasSlice";

function BasketList() {
  const basketList = useTypedSelector((state) => state.pizzas.basket.list);

  const dispatch = useTypedDispatch();

  const onIncreasePizzaCount = (id: number) => {
    console.log("onIncreasePizzaCount");
    dispatch(increasePizzaCount(id));
  };

  const onDecreasePizzaCount = (id: number) => {
    console.log("onDecreasePizzaCount");
    dispatch(decreasePizzaCount(id));
  };

  return (
    <div className={s.cart}>
      <div className="content__items">
        {basketList.map((pizza, index) => (
          <div className={s.item} key={pizza.id}>
            <div className={s.item__img}>
              <img src={pizza.imageUrl} alt="Pizza" />
            </div>
            <div className={s.item__info}>
              <h3>{pizza.title}</h3>
              {/* TODO: по id ? + вынести список типов теста и размеров в какую-т ообщую переменную/хук, 
              чтобы можно было обращаться*/}
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div className={s.item__count}>
              <button
                className={cx(
                  "button button--outline button--circle",
                  s.item__count_minus
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
                  s.item__count_plus
                )}
                onClick={() => onIncreasePizzaCount(pizza.id)}
              >
                <Icon icon="plus" color="primary" />
              </button>
            </div>
            <div className={s.item__price}>
              <b>{pizza.sum} ₽</b>
            </div>
            <div className={s.item__remove}>
              <button className="button button--outline button--circle">
                <Icon icon="cross" color="primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketList;
