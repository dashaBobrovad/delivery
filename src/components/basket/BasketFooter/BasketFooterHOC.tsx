// function BasketFooterHOC = (component) = () => {
// }

import { useTypedSelector } from "data/hooks";

// export default BasketFooterHOC;

// HOC
function BasketFooterHOC(C: any) {
  return function BasketFooterHOC(props: any) {
    // const [time, setTime] = useState(new Date().toUTCString());
    // useEffect(() => {
    //   setTimeout(() => setTime(new Date().toUTCString()), 1000);
    // });
    const basketCount = useTypedSelector((state) => state.pizzas.basket.count);
    const basketSum = useTypedSelector((state) => state.pizzas.basket.sum);
    return <C {...props} basketCount={basketCount} basketSum={basketSum} {...props}/>;
  };
}

export default BasketFooterHOC;
