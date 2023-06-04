import { get } from "../features/pizzas/pizzasSlice";
import pizzasMock from "../../mock";
import { base64DecodeFn } from "utils";

const path = "https://api.github.com/repos/dashaBobrovad/delivery";

const fetchPizzas = () => async (dispatch) => {
  await fetch(`${path}/contents/public/db/data.json`)
    .then((d) => d.json())
    .then((d) => fetch(`${path}/git/blobs/${d.sha}`))
    .then((d) => d.json())
    .then((d) =>
      dispatch(get(base64DecodeFn(JSON.parse(window.atob(d.content)))))
    )
    .catch((e) => {
      const error = e;
      console.error(new Error("error", error));
      dispatch(get(pizzasMock));
    });
};

export default fetchPizzas;
