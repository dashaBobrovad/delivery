import nextId from "react-id-generator";
import cx from "classnames";

import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";

interface ICategoriesProps {
  active: number;
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParams) => void;
}
function Categories({
  active,
  searchParams,
  setSearchParams,
}: ICategoriesProps) {
  function onActiveClick(index: number) {
    searchParams.set("category", String(index));
    setSearchParams(searchParams);
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
