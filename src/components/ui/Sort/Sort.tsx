import { useEffect, useRef, useState } from "react";

import nextId from "react-id-generator";

import { sortList } from "data/constants/pizza";
import { Icon } from "components";
import s from "./Sort.module.scss";

interface ISortProps {
  active: number;
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParams) => void;
}

function Sort({ active, searchParams, setSearchParams }: ISortProps) {
  const sortRef = useRef<HTMLInputElement | null>(null);

  console.log(searchParams);
  
  const [open, setOpen] = useState(false);

  function onActiveClick(index: number) {
    searchParams.set("sortBy", String(index));
    setSearchParams(searchParams);

    setOpen(false);
  }

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const path = event.composedPath();
      if (!path.includes(sortRef.current as HTMLInputElement)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

export default Sort;
