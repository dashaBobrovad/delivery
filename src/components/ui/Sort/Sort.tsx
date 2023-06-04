import { Icon } from "components";
import React, { useState } from "react";
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
      <div className={s.label} onClick={toggleOpen}>
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
                key={index}
                className={`${s.item} ${index === active ? s.item_active : ""}`}
                onClick={() => onActiveClick(index)}
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
