import { useState } from "react";

import nextId from "react-id-generator";

import { Icon } from "components";
import s from "./Sort.module.scss";

function Sort() {
  const list = ["популярности", "цене", "алфавиту"];

  const [active, setActive] = useState(0);

  const [open, setOpen] = useState(false);

  function onActiveClick(index: number) {
    setActive(index);
    setOpen(false);
  }

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={s.sort}>
      <div
        role="tab"
        tabIndex={0}
        className={s.label}
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
      >
        {/* TODO: use Icon */}
        <Icon icon="smallArrow" />
        <b>Сортировка по:</b>
        <span>{list[active]}</span>
      </div>
      {open && (
        <div className={s.popup}>
          <ul className={s.list}>
            {list.map((item, index) => (
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

export default Sort;
