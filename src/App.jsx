import { Header, Routing, Sprite } from "components";
import "./scss/app.scss";

/*
  - получение данных с бэка
  - запись в локальное хранилище
  - добавление в корзину
  - табики
  - сортировки
  - поиск
  - накатить TS
*/

function App() {
  return (
    <div className="wrapper">
      <Sprite />

      <div className="content">
        <Header />

        <Routing />
      </div>
    </div>
  );
}

export default App;
