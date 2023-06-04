import React, { useState } from "react";
import s from "./Categories.module.scss";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [active, setActive] = useState(0);

  function onActiveClick(index: number) {
    setActive(index);
  }

  return (
    <div className={s.categories}>
      <ul className={s.list}>
        {categories.map((category, index) => (
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
