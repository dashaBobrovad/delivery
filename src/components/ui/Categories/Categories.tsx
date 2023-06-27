import { useEffect, useState } from "react";

import nextId from "react-id-generator";
import cx from "classnames";
import { Link, useSearchParams } from "react-router-dom";

import { useTypedDispatch } from "data/hooks";
import { sort } from "data/redux/features/pizzas/pizzasSlice";
import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";

function Categories() {
  const [active, setActive] = useState(0);

  const dispatch = useTypedDispatch();

  // function onActiveClick(index: number) {
  //   // sorl list dispatch
  //   dispatch(sort({ type: "category", id: active }));
  //   setActive(index);
  // }

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filterVal = Number(searchParams.get("category") || "");
    setActive(filterVal);
    dispatch(sort({ type: "category", id: filterVal }));
  }, [searchParams]);

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
