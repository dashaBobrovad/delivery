import { useEffect } from "react";

import nextId from "react-id-generator";

import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";

function MainPage() {
  const plugArray = Array(10).fill(null);
  const dispatch = useTypedDispatch();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);
  const pizzasList = pizzas.filteredList.length > 0 ? pizzas.filteredList : pizzas.list;

  useEffect(() => {
    // TODO: thunk from toolkit
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
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
