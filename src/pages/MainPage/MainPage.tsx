import nextId from "react-id-generator";
import { Categories, PizzaBlock, PizzaSkeleton, Sort } from "components";
import plugArray from "data/constants/plugArray";
import { IPizza } from "types";
import { IMainPageComponent } from "./types";
import MainPageHOC from "./MainPageHOC";

function MainPageComponent({
  activeFilter,
  activeSort,
  setSearchParams,
  searchParams,
  pizzasList,
  isLoaded,
}: IMainPageComponent) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          active={activeFilter}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        <Sort
          active={activeSort}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzasList.map((pizza: IPizza) => (
              <PizzaBlock pizza={pizza} key={pizza.id} />
            ))
          : plugArray.map(() => <PizzaSkeleton key={nextId()} />)}
      </div>
    </div>
  );
}

export default MainPageHOC(MainPageComponent);
