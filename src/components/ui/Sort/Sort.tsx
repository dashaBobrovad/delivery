import nextId from "react-id-generator";

import { sortList } from "data/constants/pizza";
import { Icon } from "components";
import s from "./Sort.module.scss";
import SortHOC from "./SortHOC";
import { ISortComponent } from "./types";

function SortComponent({
  active,
  open,
  sortRef,
  onActiveClick,
  toggleOpen,
}: ISortComponent) {
  return (
    <div className={s.sort} ref={sortRef}>
      <div
        role="tab"
        tabIndex={0}
        className={s.label}
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
      >
        <Icon icon="smallArrow" />
        <b>Сортировка по:</b>
        <span>{sortList[active]}</span>
      </div>
      {open && (
        <div className={s.popup}>
          <ul className={s.list}>
            {sortList.map((item, index) => (
              <li
                role="tab"
                tabIndex={0}
                key={nextId()}
                className={`${s.item} ${index === active ? s.item_active : ""}`}
                onClick={() => onActiveClick(index)}
                onKeyDown={() => onActiveClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortHOC(SortComponent);
