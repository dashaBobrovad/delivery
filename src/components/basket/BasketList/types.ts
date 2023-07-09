import { IPizza } from "types";

export interface IBasketListProps {
  list: IPizza[];
  isLoaded: boolean;
}

export interface IBasketListComponent extends IBasketListProps {
  plugArray: null[];
}
