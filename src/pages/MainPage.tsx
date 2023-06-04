import { useEffect } from "react";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useDispatch } from "react-redux";
import fetchPizzas from "data/redux/asyncActions/pizzas";
import { useTypedSelector } from "data/hooks";

function MainPage() {
  const plugArray = Array(1).fill(null);
  const dispatch = useDispatch();

  const pizzas = useTypedSelector((state) => state.pizzas.pizzas);

  useEffect(() => {
    // TODO: fx this type & use thunk from toolkit or use useTypedDispatch from crush
    dispatch(fetchPizzas() as any);
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
