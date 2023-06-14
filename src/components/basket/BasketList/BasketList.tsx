import s from "./BasketList.module.scss";
import { BasketPizza, BasketPizzaSkeleton } from "components";

import { IPizza } from "types";

interface IBasketListProps {
  list: IPizza[];
}

function BasketList({ list }: IBasketListProps) {
  const isLoaded = false;
  const plugArray = Array(5).fill(null);

  return (
    <div className={s.cart}>
      <div className="content__items">
        {isLoaded
          ? list.map((pizza, index) => (
              // skeleton is not used now, because the data comes from mocks; use with backend
              <BasketPizza pizza={pizza} />
            ))
          : plugArray.map((item, index) => <BasketPizzaSkeleton key={index} />)}
      </div>
    </div>
  );
}

export default BasketList;
