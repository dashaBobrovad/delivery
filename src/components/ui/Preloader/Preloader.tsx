import s from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={s.wrapper}>
      <div className={s.preloader}>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Preloader;
