import { useEffect, useState, FunctionComponent } from "react";
import { pizzaDoughTypes, pizzaSizes } from "data/constants/pizza";
import { useTypedDispatch, useTypedSelector } from "data/hooks";
import { addToBasket } from "data/redux/features/pizzas/pizzasSlice";
import { IPizzaBlockComponent, IPizzaBlockProps } from "./types";

function PizzaBlockHOC(Component: FunctionComponent<IPizzaBlockComponent>) {
  return function PizzaBlockHOC({ pizza }: IPizzaBlockProps) {
    const { id } = pizza;

    const dispatch = useTypedDispatch();

    const basketPizza = useTypedSelector((state) => state.pizzas.basket.list);

    const [pizzaCount, setPizzaCount] = useState<number>(0);
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const changeActiveType = (index: number) => {
      setActiveType(index);
    };

    const changeActiveSize = (index: number) => {
      setActiveSize(index);
    };

    const onAddToBasket = () => {
      const item = {
        id,
        type: pizzaDoughTypes[activeType] as string,
        size: pizzaSizes[activeSize] as number,
      };
      dispatch(addToBasket(item));
    };

    useEffect(() => {
      const basketItemsArr = [] as { id: number }[];
      Object.keys(basketPizza).map((el: string) =>
        basketItemsArr.push({
          ...basketPizza[+el],
          id: basketPizza[+el].id,
        })
      );

      const filteredArr = [] as { id: number }[];
      basketItemsArr.forEach(
        (item) => item.id === id && filteredArr.push(item)
      );

      const pizzaCount = filteredArr.reduce(
        (sum, obj: any) => obj.count + sum,
        0
      );

      setPizzaCount(pizzaCount);
    }, [basketPizza, id]);

    return (
      <Component
        pizzaCount={pizzaCount}
        activeType={activeType}
        activeSize={activeSize}
        changeActiveType={changeActiveType}
        changeActiveSize={changeActiveSize}
        onAddToBasket={onAddToBasket}
        pizza={pizza}
      />
    );
  };
}

export default PizzaBlockHOC;
