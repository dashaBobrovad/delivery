import { useEffect, useRef, useState, FunctionComponent } from "react";
import { ISortComponent, ISortProps } from "./types";

function SortHOC(Component: FunctionComponent<ISortComponent>) {
  return function SortHOC({
    active,
    searchParams,
    setSearchParams,
  }: ISortProps) {
    const sortRef = useRef<HTMLInputElement | null>(null);

    const [open, setOpen] = useState(false);

    const onActiveClick = (index: number) => {
      searchParams.set("sortBy", String(index));
      setSearchParams(searchParams);

      setOpen(false);
    };

    const toggleOpen = () => {
      setOpen((prev) => !prev);
    };

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
      <Component
        active={active}
        open={open}
        toggleOpen={toggleOpen}
        onActiveClick={onActiveClick}
        sortRef={sortRef}
      />
    );
  };
}

export default SortHOC;
