import { BasketEmpty, BasketList } from "components";

function BasketPage(params) {
  const isEmpty = false;
  return (
    <>
      {isEmpty && (
        <BasketEmpty />
      )}
      {!isEmpty && (
        <BasketList />
      )}
    </>
  );
}

export default BasketPage;
