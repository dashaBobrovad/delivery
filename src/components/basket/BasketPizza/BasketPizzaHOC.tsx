import { FunctionComponent } from "react";
import { useTypedDispatch } from "data/hooks";
import {
  decreasePizzaCount,
  increasePizzaCount,
  removePizza,
} from "data/redux/features/pizzas/pizzasSlice";
import { IBasketPizzaComponent, IBasketPizzaProps } from "./types";

function BasketPizzaHOC(Component: FunctionComponent<IBasketPizzaComponent>) {
  return function BasketPizzaHOC(props: IBasketPizzaProps) {
    const dispatch = useTypedDispatch();

    const onIncreasePizzaCount = (id: number) => {
      dispatch(increasePizzaCount(id));
    };

    const onDecreasePizzaCount = (id: number) => {
      dispatch(decreasePizzaCount(id));
    };

    const onRemovePizza = (id: number) => {
      dispatch(removePizza(id));
    };

    return (
      <Component
        onIncreasePizzaCount={onIncreasePizzaCount}
        onDecreasePizzaCount={onDecreasePizzaCount}
        onRemovePizza={onRemovePizza}
        {...props}
      />
    );
  };
}

export default BasketPizzaHOC;
