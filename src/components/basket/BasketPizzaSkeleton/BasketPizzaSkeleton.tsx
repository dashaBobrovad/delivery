import s from "./BasketPizzaSkeleton.module.scss";
import cx from "classnames";

function BasketPizzaSkeleton() {
  return (
    <div className={s.skeleton}>
      <div className={cx(s.filling, s.img)} />
      <div className={s.info}>
        <div className={cx(s.filling, s.line)} />
        <div className={cx(s.filling, s.line)} />
      </div>
      <div className={s.actions}>
        <div className={s.btns}>
          <div className={cx(s.filling, s.btn)} />
          <div className={cx(s.filling, s.number)} />
          <div className={cx(s.filling, s.btn)} />
        </div>
        <div className={cx(s.filling, s.price)} />
        <div className={cx(s.filling, s.btn)} />
      </div>
    </div>
  );
}

export default BasketPizzaSkeleton;
