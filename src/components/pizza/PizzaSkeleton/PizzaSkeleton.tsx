import cx from "classnames";
import s from "./PizzaSkeleton.module.scss";

function PizzaSkeleton() {
  return (
    <div className={s.skeleton}>
      <div className={cx(s.filling, s.img)} />
      <div className={cx(s.filling, s.title)} />
      <div className={cx(s.filling, s.types)} />
      <div className={s.footer}>
        <div className={cx(s.filling, s.price)} />
        <div className={cx(s.filling, s.btn)} />
      </div>
    </div>
  );
}

export default PizzaSkeleton;
