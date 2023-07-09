import { IPizza } from "types";

export interface IBasketPizzaProps {
  pizza: IPizza;
}

export interface IBasketPizzaComponent extends IBasketPizzaProps {
  onIncreasePizzaCount: (id: number) => void;
  onDecreasePizzaCount: (id: number) => void;
  onRemovePizza: (id: number) => void;
}
