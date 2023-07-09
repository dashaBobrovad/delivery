import { Icon } from "components";

import s from "./BasketHeader.module.scss";
import BasketHeaderHOC from "./BasketHeaderHOC";
import { IBasketHeader } from "./types";

function BasketHeaderComponent({onCleanClick}: IBasketHeader) {
  return (
    <button type="button" onClick={onCleanClick} className={s.header}>
      <span className={s.text}>Очистить корзину</span>
      <Icon icon="trash" />
    </button>
  );
}

export default BasketHeaderHOC(BasketHeaderComponent);
