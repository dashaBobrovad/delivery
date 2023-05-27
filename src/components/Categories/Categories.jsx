import s from './Categories.module.scss';

function Categories({ categories }) {
  return (
    <div className={s.categories}>
      <ul className={s.list}>
        {categories.map((category, index) => (
          <li key={index} className={`${s.category} ${index === 0 ? s.category_active : ''}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
