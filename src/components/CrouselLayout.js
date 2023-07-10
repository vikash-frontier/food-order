import React from "react";
import CrouselCard from "./CrouselCard";
import { CROUSEL_LIST } from "../utils/mockData";
const CrouselLayout = () => {
  return (
    <div className="crousel-container">
      {CROUSEL_LIST.map((list) => (
        <CrouselCard list={list} key={list.data.bannerId} />
      ))}
    </div>
  );
};

export default CrouselLayout;
