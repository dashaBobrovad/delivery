import { Icon } from "components";
import { useTypedDispatch } from "data/hooks";
import { cleanBasket } from "data/redux/features/pizzas/pizzasSlice";
import s from "./BasketHeader.module.scss";

function BasketHeader() {
  const dispatch = useTypedDispatch();

  const onCleanClick = () => {
    dispatch(cleanBasket());
  };

  return (
    <button type="button" onClick={onCleanClick} className={s.header}>
      <span className={s.text}>Очистить корзину</span>
      <Icon icon="trash" />
    </button>
  );
}

export default BasketHeader;
