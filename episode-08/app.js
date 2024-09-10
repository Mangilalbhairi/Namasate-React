import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Outlet />
        <Routes>
          <Route path="/" element={<Body />}> </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
