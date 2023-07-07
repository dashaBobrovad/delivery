import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useSearchParams } from "react-router-dom";
// import { sort } from "data/redux/features/pizzas/pizzasSlice";
import { pizzaCategories, sortList } from "data/constants/pizza";
import { IPizza } from "types";

function MainPage() {
  const plugArray = Array(10).fill(null);
  const dispatch = useTypedDispatch();

  const [activeFilter, setActiveFilter] = useState(0);
  const [activeSort, setActiveSort] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);

  const [filteredPissaz, setFilteredPizzas] = useState<IPizza[]>([]);

  // const [pizzas, setPizzas]
  const pizzasList = filteredPissaz.length > 0 ? filteredPissaz : pizzas.list;

  useEffect(() => {
    if (pizzasList.length === 0) {
      dispatch(fetchPizzas());
    }

    // else {
  }, []);

  useEffect(() => {
    let filterVal = Number(searchParams.get("category") || "");
    let sortVal = Number(searchParams.get("sortBy") || "");

    if (!pizzaCategories.includes(pizzaCategories[filterVal])) {
      searchParams.set("category", "0");
      setSearchParams(searchParams);
      filterVal = 0;
    }

    if (!sortList.includes(sortList[sortVal])) {
      searchParams.set("sortBy", "0");
      setSearchParams(searchParams);
      sortVal = 0;
    }
    setActiveFilter(filterVal);
    setActiveSort(sortVal);

    if (sortVal || filterVal) {

      let filteredPizzas = [];

      if (filterVal !== 0) {
        filteredPizzas = pizzas.list.filter(
          (item) => item.category === filterVal
        );
      } else {
        filteredPizzas = pizzas.list;
      }

      let resSort = "";
      switch (sortVal) {
        case 0:
          resSort = "rating";
          break;
        case 1:
          resSort = "price";
          break;
        default:
          break;
      }

      // TODO: избавиться от дублирования
      if (sortVal === 0) {
        filteredPizzas.sort(
          (a, b) =>
            // Number(a?[resSort as keyof IPizza]:0) - Number(b?[resSort as keyof IPizza]:0) - incorrect
            +(b as any)[resSort as keyof IPizza] -
            +(a as any)[resSort as keyof IPizza]
        );
      }

      if (sortVal === 1) {
        filteredPizzas.sort(
          (a, b) =>
            // Number(a?[resSort as keyof IPizza]:0) - Number(b?[resSort as keyof IPizza]:0) - incorrect
            +(a as any)[resSort as keyof IPizza] -
            +(b as any)[resSort as keyof IPizza]
        );
      }

      if (sortVal === 2) {
        filteredPizzas.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      setFilteredPizzas(filteredPizzas);
    }
  }, [pizzas.list, searchParams]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          active={activeFilter}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        <Sort
          active={activeSort}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.isLoaded
          ? pizzasList.map((pizza) => (
              <PizzaBlock pizza={pizza} key={pizza.id} />
            ))
          : plugArray.map(() => <PizzaSkeleton key={nextId()} />)}
      </div>
    </div>
  );
}

export default MainPage;
