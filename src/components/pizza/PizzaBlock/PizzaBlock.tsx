import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import { Icon, Picture } from "components";
import { pizzaDoughTypes, pizzaSizes } from "data/constants/pizza";
import { useTypedDispatch, useTypedSelector } from "data/hooks";
import { IPizza } from "types";
import { addToBasket } from "data/redux/features/pizzas/pizzasSlice";
import s from "./PizzaBlock.module.scss";

interface IPizzaBlockProps {
  pizza: IPizza;
}

function PizzaBlock({ pizza }: IPizzaBlockProps) {
  const { id, title, imageUrl, types, sizes, price } = pizza;

  const dispatch = useTypedDispatch();

  const basketPizza = useTypedSelector((state) => state.pizzas.basket.list);

  const [pizzaCount, setPizzaCount] = useState<number>(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const changeActiveType = (index: number) => {
    setActiveType(index);
  };

  const changeActiveSize = (index: number) => {
    setActiveSize(index);
  };

  const onAddToBasket = () => {
    // TODO: заменить на id (?)
    const item = {
      id,
      type: pizzaDoughTypes[activeType] as string,
      size: pizzaSizes[activeSize] as number,
    };
    dispatch(addToBasket(item));
  };

  useEffect(() => {
    const basketItemsArr = [] as { id: number }[];
    Object.keys(basketPizza).map((el: string) =>
      basketItemsArr.push({
        ...basketPizza[+el],
        id: basketPizza[+el].id,
      })
    );

    const filteredArr = [] as { id: number }[];
    basketItemsArr.forEach((item) => item.id === id && filteredArr.push(item));

    const pizzaCount = filteredArr.reduce(
      (sum, obj: any) => obj.count + sum,
      0
    );

    setPizzaCount(pizzaCount);
  }, [basketPizza, id]);

  return (
    <div className={s.pizza}>
      <Picture parentClass={s.image} src={imageUrl} alt={title} />
      <h4 className={s.title}>{title}</h4>
      <div className={s.selector}>
        <ul className={s.list}>
          {types.map((type, index) => (
            <li
              role="tab"
              tabIndex={0}
              className={`${s.item} ${
                index === activeType ? s.item_active : ""
              }`}
              key={nextId()}
              onClick={() => changeActiveType(index)}
              onKeyDown={() => changeActiveType(index)}
            >
              {pizzaDoughTypes[type]}
            </li>
          ))}
        </ul>
        <ul className={s.list}>
          {sizes.map((size, index) => (
            <li
              role="tab"
              tabIndex={0}
              className={`${s.item} ${
                index === activeSize ? s.item_active : ""
              }`}
              key={nextId()}
              onClick={() => changeActiveSize(index)}
              onKeyDown={() => changeActiveSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={s.bottom}>
        <div className={s.price}>от {price} ₽</div>
        <button
          type="button"
          onClick={onAddToBasket}
          className="button button--outline button--add"
        >
          <Icon icon="plus" color="primary" />
          <span>Добавить</span>
          <i>{pizzaCount || 0}</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
