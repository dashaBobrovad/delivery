import { useTypedDispatch } from "data/hooks";
import { cleanBasket } from "data/redux/features/pizzas/pizzasSlice";
import { FunctionComponent } from "react";
import { IBasketHeaderComponent } from "./types";

function BasketHeaderHOC(Component: FunctionComponent<IBasketHeaderComponent>) {
  return function BasketHeaderHOC() {
    const dispatch = useTypedDispatch();

    const onCleanClick = () => {
      dispatch(cleanBasket());
    };

    return <Component onCleanClick={onCleanClick} />;
  };
}

export default BasketHeaderHOC;
