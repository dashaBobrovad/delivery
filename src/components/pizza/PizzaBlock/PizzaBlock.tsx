import { Icon } from 'components';
import { useTypedDispatch, useTypedSelector } from 'data/hooks';
import { addToBasket } from 'data/redux/features/pizzas/pizzasSlice';
import { useState } from 'react';
import { IPizza } from 'types';
import s from './PizzaBlock.module.scss';

interface IPizzaBlockProps {
  pizza: IPizza;
}

function PizzaBlock({ pizza }: IPizzaBlockProps) {
  const { id, title, imageUrl, types, sizes, price } = pizza;

  const dispatch = useTypedDispatch();

  const typesList = ['Тонкое', 'толстое'];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const changeActiveType = (index: number) => {
    setActiveType(index);
  };

  const changeActiveSize = (index: number) => {
    setActiveSize(index);
  };

  const onAddToBasket = () => {
    dispatch(addToBasket(pizza));
    console.log('onAddToBasket')
  };

  const basketPizza = useTypedSelector((state) => state.pizzas.basket)
console.log(basketPizza)
  return (
    <div className={s.pizza}>
      <img className={s.image} src={imageUrl} alt={title} />
      <h4 className={s.title}>{title}</h4>
      <div className={s.selector}>
        <ul className={s.list}>
          {types.map((type, index) => (
            <li
              className={`${s.item} ${
                index === activeType ? s.item_active : ''
              }`}
              key={index}
              onClick={() => changeActiveType(index)}
            >
              {typesList[type]}
            </li>
          ))}
        </ul>
        <ul className={s.list}>
          {sizes.map((size, index) => (
            <li
              className={`${s.item} ${
                index === activeSize ? s.item_active : ''
              }`}
              key={index}
              onClick={() => changeActiveSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={s.bottom}>
        <div className={s.price}>от {price} ₽</div>
        <button onClick={onAddToBasket} className="button button--outline button--add">
          <Icon icon="plus" color="primary" />
          <span>Добавить</span>
          <i>2</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
