import { FunctionComponent } from "react";
import { ICategoriesComponent, ICategoriesProps } from "./types";

function CategoriesHOC(Component: FunctionComponent<ICategoriesComponent>) {
  return function CategoriesHOC({
    active,
    searchParams,
    setSearchParams,
  }: ICategoriesProps) {
    const onActiveClick = (index: number) => {
      searchParams.set("category", String(index));
      setSearchParams(searchParams);
    };

    return <Component onActiveClick={onActiveClick} active={active} />;
  };
}

export default CategoriesHOC;
