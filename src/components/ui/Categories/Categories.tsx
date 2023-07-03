import nextId from "react-id-generator";
import cx from "classnames";
// import { createSearchParams, useNavigate } from "react-router-dom";


import { pizzaCategories } from "data/constants/pizza";
import s from "./Categories.module.scss";


interface ICategoriesProps {
  active: number;
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParams) => void;
}
function Categories({ active, searchParams, setSearchParams }: ICategoriesProps) {

  // const query = useQuery(); https://youtu.be/tQm7JK3OJpM
  // const category = query.get("category") || "";

  // const navigate = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();

  function onActiveClick(index: number) {
   
    // const params = { category: String(index) };

    // navigate({
    //   pathname: "/",
    //   search: `?${createSearchParams(params)}`,
    // });

    console.log(searchParams);
    setSearchParams({...searchParams, category: String(index)} as URLSearchParams);
    // TODO: use OnActiveClickm
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
