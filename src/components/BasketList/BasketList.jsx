import s from './BasketList.module.scss';
import cx from 'classnames';
import { Icon } from 'components';

// TODO: use Sprite
// TODO: разнести на компоненты

const basketList = [
  {
    id: 0,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
    title: 'Пепперони Фреш с перцем',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 0,
    rating: 4,
  },
];
function BasketList(params) {
  return (
    <div className="container container_cart">
      <div className={s.cart}>
        <div className={s.top}>
          <h2 className={s.title}>
            <Icon icon="basket" color="black" />
            Корзина
          </h2>
          <div className={s.clear}>
            <Icon icon="trash" color="black" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {basketList.map((pizza, index) => (
            <div className={s.item} key={pizza.id}>
              <div className={s.item__img}>
                <img
                  src={pizza.imageUrl}
                  alt="Pizza"
                />
              </div>
              <div className={s.item__info}>
                {/* TODO: по id ? */}
                <h3>Сырный цыпленок</h3>
                <p>тонкое тесто, 26 см.</p>
              </div>
              <div className={s.item__count}>
                <div
                  className={cx(
                    'button button--outline button--circle',
                    s.item__count_minus
                  )}
                >
                 <Icon icon="minus" />
                </div>
                <b>2</b>
                <div
                  className={cx(
                    'button button--outline button--circle',
                    s.item__count_plus
                  )}
                >
                  <Icon icon="plus" />
                </div>
              </div>
              <div className={s.item__price}>
                <b>770 ₽</b>
              </div>
              <div className={s.item__remove}>
                <div className="button button--outline button--circle">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                      fill="#EB5A1E"
                    />
                    <path
                      d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                      fill="#EB5A1E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.bottom__details}>
            <span>
              {' '}
              Всего пицц: <b>3 шт.</b>{' '}
            </span>
            <span>
              {' '}
              Сумма заказа: <b>900 ₽</b>{' '}
            </span>
          </div>
          <div className={s.bottom__buttons}>
            <a
              href="/"
              className={cx('button button--outline button--add', s.back)}
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </a>
            <div className={cx('button', s.pay)}>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketList;
