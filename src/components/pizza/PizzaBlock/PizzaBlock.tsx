import nextId from "react-id-generator";

import { Icon, Picture } from "components";
import { pizzaDoughTypes } from "data/constants/pizza";

import s from "./PizzaBlock.module.scss";
import { IPizzaBlockComponent } from "./types";
import PizzaBlockHOC from "./PizzaBlockHOC";

function PizzaBlockComponent({
  pizzaCount,
  activeType,
  activeSize,
  changeActiveType,
  changeActiveSize,
  onAddToBasket,
  pizza,
}: IPizzaBlockComponent) {
  const { title, imageUrl, types, sizes, price } = pizza;

  return (
    <div className={s.pizza}>
      <Picture parentClass={s.image} src={imageUrl} alt={title} />
      <h4 className={s.title}>{title}</h4>
      <div className={s.selector}>
        <ul className={s.list}>
          {types.map((type: number, index: number) => (
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

export default PizzaBlockHOC(PizzaBlockComponent);
