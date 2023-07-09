import nextId from "react-id-generator";
import cx from "classnames";

import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";
import CategoriesHOC from "./CategoriesHOC";
import { ICategoriesComponent } from "./types";

function CategoriesComponent({ onActiveClick, active }: ICategoriesComponent) {
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

export default CategoriesHOC(CategoriesComponent);
