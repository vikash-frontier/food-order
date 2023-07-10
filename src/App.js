import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Header from "./components/Header";
import CrouselLayout from "./components/CrouselLayout";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <CrouselLayout />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
