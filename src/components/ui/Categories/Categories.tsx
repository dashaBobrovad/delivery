import { useState } from "react";

import nextId from "react-id-generator";
import cx from "classnames";

import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";

function Categories() {
  const [active, setActive] = useState(0);

  function onActiveClick(index: number) {
    setActive(index);
  }

  return (
    <div className={cx("swipe", s.categories)}>
      <ul className={s.list}>
        {pizzaCategories.map((category, index) => (
          <li
            role="tab"
            tabIndex={0}
            key={nextId()}
            className={`${s.category} ${
              index === active ? s.category_active : ""
            }`}
            onClick={() => onActiveClick(index)}
            onKeyDown={() => onActiveClick(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
