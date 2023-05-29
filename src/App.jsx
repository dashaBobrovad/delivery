import { Header, Routing, Sprite } from "components";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Sprite />

      <Header />

      <div className="content">
        <div className="container">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
