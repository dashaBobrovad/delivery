import { useTypedSelector } from "data/hooks";
import { FunctionComponent } from "react";
import { IBasketFooterComponent } from "./types";

function BasketFooterHOC(Component: FunctionComponent<IBasketFooterComponent>) {
  return function BasketFooterHOC() {
    const basketCount = useTypedSelector((state) => state.pizzas.basket.count);
    const basketSum = useTypedSelector((state) => state.pizzas.basket.sum);

    return <Component basketCount={basketCount} basketSum={basketSum} />;
  };
}

export default BasketFooterHOC;
