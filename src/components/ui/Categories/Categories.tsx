import { useState } from "react";

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
            key={index}
            className={`${s.category} ${
              index === active ? s.category_active : ""
            }`}
            onClick={() => onActiveClick(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
