import s from './BasketFooter.module.scss';
import cx from 'classnames';
import { Icon } from 'components';
import { Link } from 'react-router-dom';

function BasketFooter(params) {
    return (
        <div className={s.basketFooter}>
        <div className={s.basketFooter__details}>
          <span>
            {' '}
            Всего пицц: <b>3 шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>900 ₽</b>{' '}
          </span>
        </div>
        <div className={s.basketFooter__buttons}>
          <Link
            to="/"
            className={cx('button button--outline button--add', s.back)}
          >
            <Icon icon="arrowLeft" />

            <span>Вернуться назад</span>
          </Link>

          <div className={cx('button', s.pay)}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    )
}

export default BasketFooter;