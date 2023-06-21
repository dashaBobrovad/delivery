import { EPizzaSizes } from "data/constants/pizza";

interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: EPizzaSizes[];
  price: number;
  category: number;
  rating: number;
  count?: number; // try ro remove "?" ...
  sum?: number;
  type?: number;
  size?: number;
}

interface IPizzaBasket extends IPizza {
  count: number;
  sum: number;
  type: number; // TODO: 0|1
  size: number; // TODO: 0|1
}
export type { IPizza, IPizzaBasket };
