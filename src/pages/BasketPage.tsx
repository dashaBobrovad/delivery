import { BasketEmpty, BasketFooter, BasketList } from "components";
import { useTypedSelector } from "data/hooks";

function BasketPage() {
  const basketList = useTypedSelector((state) => state.pizzas.basket.list);
  const isLoaded =  useTypedSelector((state) => state.pizzas.basket.isLoaded);
  
  const isEmpty = basketList.length === 0;


  return (
    <>
      {isEmpty && <BasketEmpty />}
      {!isEmpty && (
        <div className="container container_cart">
          <BasketList list={basketList} isLoaded={isLoaded} />
          {isLoaded && <BasketFooter />}
        </div>
      )}
    </>
  );
}

export default BasketPage;
