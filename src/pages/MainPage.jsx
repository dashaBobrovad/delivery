import { Categories, PizzaBlock, Sort } from "components";

// mock
const pizzas = [
  {
    id: 1,
    title: "Чизбургер-пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    types: ["тонкое", "традиционное"],
    sizes: ["26", "30", "40"],
    price: 395,
  },
  {
    id: 2,
    title: "Чизбургер-пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    types: ["тонкое", "традиционное"],
    sizes: ["26", "30", "40"],
    price: 395,
  },
  {
    id: 3,
    title: "Чизбургер-пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    types: ["тонкое", "традиционное"],
    sizes: ["26", "30", "40"],
    price: 395,
  },
  {
    id: 4,
    title: "Чизбургер-пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    types: ["тонкое", "традиционное"],
    sizes: ["26", "30", "40"],
    price: 395,
  },
  {
    id: 5,
    title: "Чизбургер-пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    types: ["тонкое", "традиционное"],
    sizes: ["26", "30", "40"],
    price: 395,
  },
];

function MainPage(params) {
  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div><h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza, index) => (
          <PizzaBlock props={pizza} key={pizza.id} />
        ))}
      </div>
    </>
  );
}

export default MainPage;
