import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import { Icon } from "components";
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

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const changeActiveType = (index: number) => {
    setActiveType(index);
  };

  const changeActiveSize = (index: number) => {
    setActiveSize(index);
  };

  const onAddToBasket = () => {
    //  dispatch(addToBasket({ id, type: activeType, size: activeSize }));
    // TODO: не надо передавать все
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: pizzaDoughTypes[activeType],
      size: pizzaSizes[activeSize],
    };
    dispatch(addToBasket(item));
  };

  // const basketPizza = useTypedSelector((state) =>
  //   state.pizzas.basket.list.find((item) => item.id === id)
  // );
  //  const arr = [] as any[];
  // const basketPizza = arr.push(
  //   useTypedSelector((state) =>
  //     state.pizzas.basket.list.find((item) => item.id === id)
  //   )
  // );

  const basketPizza = useTypedSelector((state) => state.pizzas.basket.list);

  const [res, setRes] = useState<any>(0);

  useEffect(() => {
    // basketPizza.find((item) => item.)
    //  const foundP = basketPizza.find((item) => item.id === id);
    //  if(foundP){
    //   console.log(`${foundP.title  }:${   foundP.count}`);
    //  }

    const newArr = [] as any[];
    Object.keys(basketPizza).map((el) =>
      newArr.indexOf(basketPizza[el as any].id) !== -1
        ? null
        : newArr.push({
            id: basketPizza[el as any].id,
            count: basketPizza[el as any].count,
          })
    );

    // объединить все объекты с одинаковым id и в редьюсе посчитать их сумму

    const resArr = [] as any[];
    newArr.forEach((item) => item.id === id && resArr.push(item));
   //  console.log(resArr);
    // newArr.filter((item) => item.id === 1);
   // console.log(newArr);
   // const newArrObj = [] as any[];
     // Object.keys(newArr).map((el) => newArrObj.push({ id: el }));

    // console.log(JSON.stringify(newArrObj));

    const ttt = resArr.reduce((sum, obj: any) => obj.count + sum, 0);

    console.log(resArr);

  setRes(ttt);
  }, [basketPizza]);

  useEffect(() => {
   console.log(res);
  }, [res]);
  
  // const pizzaCount = basketPizza;
  // console.log(pizzaCount);

  return (
    <div className={s.pizza}>
      <img className={s.image} src={imageUrl} alt={title} />
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
          <i>{res}</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
