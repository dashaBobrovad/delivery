import s from "./BasketList.module.scss";
import cx from "classnames";
import { Icon } from "components";
import { useTypedSelector } from "data/hooks";

function BasketList() {
  const basketList = useTypedSelector((state) => state.pizzas.basket.list);

  console.log(basketList);
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
              <div
                className={cx(
                  "button button--outline button--circle",
                  s.item__count_minus
                )}
              >
                <Icon icon="minus" color="primary" />
              </div>
              <b>{pizza.count}</b>
              <div
                className={cx(
                  "button button--outline button--circle",
                  s.item__count_plus
                )}
              >
                <Icon icon="plus" color="primary" />
              </div>
            </div>
            <div className={s.item__price}>
              <b>{pizza.sum} ₽</b>
            </div>
            <div className={s.item__remove}>
              <div className="button button--outline button--circle">
                <Icon icon="cross" color="primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketList;
