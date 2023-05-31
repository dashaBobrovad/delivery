import { Icon } from "components";
import { useState } from "react";
import s from "./PizzaBlock.module.scss";

function PizzaBlock({ props }) {
  const { title, imageUrl, types, sizes, price } = props;

  const typesList = ["Тонкое", "толстое"];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const changeActiveType = (index) => {
    setActiveType(index);
  };

  const changeActiveSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className={s.pizza}>
      <img className={s.image} src={imageUrl} alt={title} />
      <h4 className={s.title}>{title}</h4>
      <div className={s.selector}>
        <ul className={s.list}>
          {types.map((type, index) => (
            <li
              className={`${s.item} ${
                index === activeType ? s.item_active : ""
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
                index === activeSize ? s.item_active : ""
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
        <div className="button button--outline button--add">
          <Icon icon="arrowLeft" />
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
