import { useEffect } from "react";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector, useTypedDispatch } from "data/hooks";

function MainPage() {
  const plugArray = Array(1).fill(null);
  const dispatch = useTypedDispatch();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);

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
        {plugArray.map((index) => (
          <PizzaSkeleton key={index} />
        ))}

        {pizzas.map((pizza, index) => (
          <PizzaBlock pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;