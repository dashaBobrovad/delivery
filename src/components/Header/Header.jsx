import Icon from "components/Icon/Icon";
import s from "./Header.module.scss";

function Header(params) {
  return (
    <div className={s.header}>
      <div className={`container ${s.container}`}>
        <div className={s.logo}>
          <Icon icon="logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div>
          {/* TODO: NavLink */}
          <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <Icon icon="basket" />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
