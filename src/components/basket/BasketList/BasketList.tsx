import nextId from "react-id-generator";

import { BasketPizza, BasketPizzaSkeleton } from "components";
import { IPizza } from "types";
import s from "./BasketList.module.scss";

interface IBasketListProps {
  list: IPizza[];
  isLoaded: boolean;
}

function BasketList({ list, isLoaded }: IBasketListProps) {
  const plugArray = Array(5).fill(null);

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
