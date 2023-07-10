import React from "react";
import { CROUSEL_IMAGE } from "../utils/constants";
const CrouselCard = (props) => {
  const { creativeId } = props.list.data;
  console.log(creativeId);

  return (
    <div>
      <img className="logo" src={CROUSEL_IMAGE + creativeId} alt="img" />
    </div>
  );
};
export default CrouselCard;
