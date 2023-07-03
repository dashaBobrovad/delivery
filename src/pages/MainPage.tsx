import { useEffect, useState } from "react";

import nextId from "react-id-generator";

import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useSearchParams } from "react-router-dom";
import { sort } from "data/redux/features/pizzas/pizzasSlice";

function MainPage() {
  const plugArray = Array(10).fill(null);
  const dispatch = useTypedDispatch();

  const [active, setActive] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();


  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);
  const pizzasList =
    pizzas.filteredList.length > 0 ? pizzas.filteredList : pizzas.list;

    

  useEffect(() => {
    const filterVal = Number(searchParams.get("category") || "");

    // TODO: change query with redux (?)
    // const sortVal = Number(searchParams.get("sort") || "");

    setActive(filterVal);

    if (pizzasList.length === 0) {
      dispatch(fetchPizzas(filterVal));
    } else {
      dispatch(sort({ type: "category", id: filterVal }));
    }

  }, [searchParams]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories active={active} setSearchParams={setSearchParams} searchParams={searchParams}/>
        <Sort />
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
