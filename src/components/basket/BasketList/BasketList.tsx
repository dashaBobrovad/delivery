import nextId from "react-id-generator";
import plugArray from "data/constants/plugArray";
import { BasketPizza, BasketPizzaSkeleton } from "components";
import s from "./BasketList.module.scss";
import { IBasketListComponent } from "./types";

function BasketList({
  list,
  isLoaded
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

export default BasketList;
