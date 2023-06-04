import { BasketEmpty, BasketFooter, BasketList } from "components";

function BasketPage(params) {
  const isEmpty = false;
  return (
    <>
      {isEmpty && <BasketEmpty />}
      {!isEmpty && (
        <div className="container container_cart">
          <BasketList />
          <BasketFooter />
        </div>
      )}
    </>
  );
}

export default BasketPage;
