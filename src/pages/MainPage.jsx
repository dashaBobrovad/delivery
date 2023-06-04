import { useEffect } from "react";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import { useDispatch, useSelector } from "react-redux";
import fetchPizzas from "data/redux/asyncActions/pizzas";

function MainPage(params) {
  const plugArray = Array(1).fill(null);
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.pizzas.pizzas);

  useEffect(() => {
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
