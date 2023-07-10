import {
  BasketEmpty,
  BasketFooter,
  BasketHeader,
  BasketList,
} from "components";
import { IBasketPageComponent } from "./types";
import BasketPageHOC from "./BasketPageHOC";

function BasketPageComponent({
  basketList,
  isLoaded,
  isEmpty,
}: IBasketPageComponent) {
  return (
    <>
      {isEmpty && <BasketEmpty />}
      {!isEmpty && (
        <div className="container container_cart">
          <BasketHeader />
          <BasketList list={basketList} isLoaded={isLoaded} />
          {isLoaded && <BasketFooter />}
        </div>
      )}
    </>
  );
}

export default BasketPageHOC(BasketPageComponent);
