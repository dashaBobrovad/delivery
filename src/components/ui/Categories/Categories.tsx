import nextId from "react-id-generator";
import cx from "classnames";
import { createSearchParams, useNavigate } from "react-router-dom";

import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";

interface ICategoriesProps {
  active: number;
}
function Categories({ active }: ICategoriesProps) {

  const navigate = useNavigate();

  // вынести как хук и использовать в Sort component
  function onActiveClick(index: number) {
    const params = { category: String(index) };
    navigate({
      pathname: "/",
      search: `?${createSearchParams(params)}`,
    });
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
