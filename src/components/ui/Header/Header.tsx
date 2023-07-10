import { Link } from "react-router-dom";

import { Icon } from "components";
import s from "./Header.module.scss";
import { IHeaderComponent } from "./types";
import HeaderHOC from "./HeaderHOC";

function HeaderComponent({ basketCount, basketSum, isLoaded }: IHeaderComponent) {
  return (
    <div className={s.header}>
      <div className={`container ${s.container}`}>
        <Link to="/" className={s.logo}>
          <Icon icon="logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <div>
          <Link to="/basket" className="button button--cart">
            <span>{isLoaded ? basketSum : "—"}&nbsp;₽</span>
            <div className="button__delimiter" />
            <Icon icon="basket" />
            <span>{isLoaded ? basketCount : "—"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderHOC(HeaderComponent);
