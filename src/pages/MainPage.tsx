import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useSearchParams } from "react-router-dom";
import { sort } from "data/redux/features/pizzas/pizzasSlice";
import { pizzaCategories, sortList } from "data/constants/pizza";

function MainPage() {
  const plugArray = Array(10).fill(null);
  const dispatch = useTypedDispatch();

  const [activeFilter, setActiveFilter] = useState(0);
  const [activeSort, setActiveSort] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);
  const pizzasList =
    pizzas.filteredList?.length > 0 ? pizzas.filteredList : pizzas.list;

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

    if (pizzasList.length === 0) {
      dispatch(fetchPizzas(filterVal));
    } else {
      // TODO: вынести из стора сюда; он в сторе нафиг не нужен 
     dispatch(sort({filter: filterVal, sort: sortVal}));
    }
  }, [searchParams]);

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
