import { BasketPage, MainPage } from "pages";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}

export default Routing;
