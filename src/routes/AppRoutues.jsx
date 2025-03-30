import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AddEvents from "../pages/AddEvents";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_events" element={<AddEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
