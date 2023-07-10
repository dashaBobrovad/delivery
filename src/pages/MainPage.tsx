import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useSearchParams } from "react-router-dom";
import { pizzaCategories, sortList } from "data/constants/pizza";
import { IPizza } from "types";
import plugArray from "data/constants/plugArray";

function MainPage() {
  const dispatch = useTypedDispatch();

  const [activeFilter, setActiveFilter] = useState(0);
  const [activeSort, setActiveSort] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);

  const [filteredPissaz, setFilteredPizzas] = useState<IPizza[]>([]);

  const pizzasList = filteredPissaz.length > 0 ? filteredPissaz : pizzas.list;

  useEffect(() => {
    if (pizzasList.length === 0) {
      dispatch(fetchPizzas());
    }
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

    let filteredPizzas = [] as IPizza[];

    if (filterVal) {
      filteredPizzas = pizzas.list.filter(
        (item) => item.category === filterVal
      );
    } else {
      filteredPizzas = pizzas.list;
    }

    const sortFn = (a: IPizza, b: IPizza) => {
      switch (sortVal) {
        case 0:
          return b.rating - a.rating;
        case 1:
          return a.price - b.price;
        case 2:
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          break;
        default:
          break;
      }
      return 0;
    };

    filteredPizzas.sort((a, b) => sortFn(a, b));

    setFilteredPizzas(filteredPizzas);
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
