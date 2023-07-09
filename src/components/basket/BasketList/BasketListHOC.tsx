import { FunctionComponent } from "react";
import { IBasketListProps, IBasketListComponent } from "./types";

function BasketListHOC(Component: FunctionComponent<IBasketListComponent>) {
  return function BasketListHOC(props: IBasketListProps) {
    const plugArray = Array(5).fill(null);

    return <Component plugArray={plugArray} {...props} />;
  };
}

export default BasketListHOC;
