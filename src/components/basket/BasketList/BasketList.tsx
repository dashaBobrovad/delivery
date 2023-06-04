import s from './BasketList.module.scss';
import cx from 'classnames';
import { Icon } from 'components';

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
function BasketList() {
  // TODP: get data (store)
  return (
    <div className={s.cart}>
      <div className="content__items">
        {basketList.map((pizza, index) => (
          <div className={s.item} key={pizza.id}>
            <div className={s.item__img}>
              <img src={pizza.imageUrl} alt="Pizza" />
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
                <Icon icon="minus" color="primary" />
              </div>
              <b>2</b>
              <div
                className={cx(
                  'button button--outline button--circle',
                  s.item__count_plus
                )}
              >
                <Icon icon="plus" color="primary" />
              </div>
            </div>
            <div className={s.item__price}>
              <b>770 ₽</b>
            </div>
            <div className={s.item__remove}>
              <div className="button button--outline button--circle">
                <Icon icon="cross" color="primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default BasketList;
