import { Categories, Header, PizzaBlock, Sort, Sprite } from "components";
import "./scss/app.scss";

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

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const sortList = ["популярности", "цене", "алфавиту"];

function App() {
  return (
    <div className="wrapper">
      <Sprite />

      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categories={categories} />
            <Sort list={sortList}/>
          </div>

          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza, index) => (
              <PizzaBlock props={pizza} key={pizza.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
