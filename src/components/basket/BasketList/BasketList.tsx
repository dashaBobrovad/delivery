import nextId from "react-id-generator";

import { BasketPizza, BasketPizzaSkeleton } from "components";
import s from "./BasketList.module.scss";
import BasketListHOC from "./BasketListHOC";
import { IBasketListComponent } from "./types";

function BasketListComponent({
  list,
  isLoaded,
  plugArray,
}: IBasketListComponent) {
  return (
    <div className={s.cart}>
      <div className="content__basketItems">
        {isLoaded
          ? list.map((pizza) => (
              // skeleton is not used now, because the data comes from mocks; use with backend
              <BasketPizza pizza={pizza} />
            ))
          : plugArray.map(() => <BasketPizzaSkeleton key={nextId()} />)}
      </div>
    </div>
  );
}

export default BasketListHOC(BasketListComponent);
