import { IPizza } from "types";

export interface IPizzaBlockProps {
  pizza: IPizza;
}

export interface IPizzaBlockComponent extends IPizzaBlockProps {
  pizzaCount: number;
  activeType: number;
  activeSize: number;
  changeActiveType: (index: number) => void;
  changeActiveSize: (index: number) => void;
  onAddToBasket: () => void;
}
