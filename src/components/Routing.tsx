import { Route, Routes } from "react-router-dom";

import { BasketPage, MainPage, NotFoundPage } from "pages";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
