import { FunctionComponent } from "react";
import { useTypedSelector } from "data/hooks";
import { IHeaderComponent } from "./types";

function HeaderHOC(Component: FunctionComponent<IHeaderComponent>) {
  return function HeaderHOC() {
    const basketCount = useTypedSelector((state) => state.pizzas.basket.count);
    const basketSum = useTypedSelector((state) => state.pizzas.basket.sum);
    const isLoaded = useTypedSelector((state) => state.pizzas.basket.isLoaded);

    return (
      <Component
        basketCount={basketCount}
        basketSum={basketSum}
        isLoaded={isLoaded}
      />
    );
  };
}

export default HeaderHOC;
