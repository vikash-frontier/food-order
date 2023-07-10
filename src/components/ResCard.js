import React from "react";
import { CARD_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { cardList } = props;
  console.log(cardList.data.data.cards);
  return (
    <>
      {cardList.data.data.cards.map((item) => (
        <div className="card-container" key={item.data.id}>
          <img
            className="res-logo"
            src={CARD_IMG + item.data.cloudinaryImageId}
            alt="res_logo"
          />
          <h3>{item.data.name}</h3>
          <div className="res-deatils">
            <p>*{item.data.avgRating}</p>
            <p>{item.data.slaString}</p>
            <p>{item.data.costForTwoString}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ResCard;
