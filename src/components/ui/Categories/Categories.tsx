import nextId from "react-id-generator";
import cx from "classnames";
import { Link } from "react-router-dom";

import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";

interface ICategoriesProps {
  active: number;
}
function Categories({ active }: ICategoriesProps) {
  // TODO: useCallback (?)
  function makeUrl(index: number) {
    // TODO: text in category url (eng)
    return `?category=${index}`;
  }

  return (
    <div className={cx("swipe", s.categories)}>
      <ul className={s.list}>
        {pizzaCategories.map((category, index) => (
          <Link
            to={makeUrl(index)}
            key={nextId()}
            className={`${s.category} ${
              index === active ? s.category_active : ""
            }`}
          >
            {/* <li
              role="tab"
              tabIndex={0}
              key={nextId()}
              className={`${s.category} ${
                index === active ? s.category_active : ""
              }`}
              onClick={() => onActiveClick(index)}
              onKeyDown={() => onActiveClick(index)}
            > */}
            {category}
            {/* </li> */}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
