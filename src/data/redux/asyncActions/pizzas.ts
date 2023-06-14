import { get, PizzaAction, setIsLoaded, SetIsLoadedAction } from "../features/pizzas/pizzasSlice";
import pizzasMock from "../../mock";
import { base64DecodeFn } from "utils";
import { Dispatch } from "redux";

const path = "https://api.github.com/repos/dashaBobrovad/delivery";

const fetchPizzas = () => async (dispatch: Dispatch<PizzaAction | SetIsLoadedAction>) => {
  dispatch(setIsLoaded(false));
  await fetch(`${path}/contents/public/db/data.json`)
    .then((d) => d.json())
    .then((d) => fetch(`${path}/git/blobs/${d.sha}`))
    .then((d) => d.json())
    .then((d) => {
      dispatch(get(JSON.parse(base64DecodeFn(window.atob(d.content))))); 
      dispatch(setIsLoaded(true));
    })
    .catch((e) => {
      const error = e;
      console.error(new Error("error", error));
      dispatch(get(pizzasMock));
      dispatch(setIsLoaded(true));
    });
};

export default fetchPizzas;
