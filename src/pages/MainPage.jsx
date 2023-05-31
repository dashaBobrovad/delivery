import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import pizzasMock from "data/mock";

function MainPage(params) {
  const plugArray = Array(1).fill(null);

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

        {pizzasMock.map((pizza, index) => (
          <PizzaBlock props={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
