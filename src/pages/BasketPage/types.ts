import { IPizza } from "types";

export interface IBasketPageComponent {
  basketList: IPizza[];
  isLoaded: boolean;
  isEmpty: boolean;
}
