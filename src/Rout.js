import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Detail";
import Login from "./Login";
import Home from "./Home";

function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:menu" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rout;
