import { FunctionComponent } from "react";
import { useTypedSelector } from "data/hooks";
import { IBasketPageComponent } from "./types";

function BasketPageHOC(Component: FunctionComponent<IBasketPageComponent>) {
  return function BasketBageHOC() {
    const basketList = useTypedSelector((state) => state.pizzas.basket.list);
    const isLoaded = useTypedSelector((state) => state.pizzas.basket.isLoaded);
    const isEmpty = basketList.length === 0;

    return (
      <Component
        basketList={basketList}
        isLoaded={isLoaded}
        isEmpty={isEmpty}
      />
    );
  };
}

export default BasketPageHOC;
