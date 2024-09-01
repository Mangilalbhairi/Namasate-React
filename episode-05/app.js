import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";



// <---Applayout Component--->
const Applayout = () => {
    return (
      <div className="wrapper">
        <Header />
        <Body />
      </div>
    );
  };
  // <-- Create Root Here -->
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Applayout />);