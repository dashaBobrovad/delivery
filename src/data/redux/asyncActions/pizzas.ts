import { Dispatch } from "redux";

import base64DecodeFn from "utils";
import {
  get,
  PizzaAction,
  setIsPizzaListLoaded,
  SetIsPizzaListLoadedAction,
} from "../features/pizzas/pizzasSlice";
import pizzasMock from "../../mock";


const path = "https://api.github.com/repos/dashaBobrovad/delivery";

const fetchPizzas =
  () =>
  async (dispatch: Dispatch<PizzaAction | SetIsPizzaListLoadedAction>) => {
    dispatch(setIsPizzaListLoaded(false));
    await fetch(`${path}/contents/public/db/data.json`)
      .then((d) => d.json())
      .then((d) => fetch(`${path}/git/blobs/${d.sha}`))
      .then((d) => d.json())
      .then((d) => {
        dispatch(get(JSON.parse(base64DecodeFn(window.atob(d.content)))));
        dispatch(setIsPizzaListLoaded(true));
      })
      .catch((e) => {
        const error = e;
        console.error(new Error("error", error));
        dispatch(get(pizzasMock));
        dispatch(setIsPizzaListLoaded(true));
      });
  };

export default fetchPizzas;
