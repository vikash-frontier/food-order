import React, { useState } from "react";
import ResCard from "./ResCard";
import { CARD_LIST } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div>
        <input type="search" />
      </div>
      <div className="res-container">
        {CARD_LIST.map((list) => (
          <ResCard cardList={list} />
        ))}
      </div>
    </div>
  );
};
export default Body;
