import { Icon } from 'components';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useTypedSelector } from 'data/hooks';

function Header() {
  const basketCount = useTypedSelector((state) => state.pizzas.basket.count);
  const basketSum = useTypedSelector((state) => state.pizzas.basket.sum);

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
            <span>{basketSum} ₽</span>
            <div className="button__delimiter"></div>
            <Icon icon="basket" />
            <span>{basketCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
