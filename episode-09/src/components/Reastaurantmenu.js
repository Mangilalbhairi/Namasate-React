import React from "react";
import Shimer from "./Shimerui.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

// <--- RestaurantMenu Component --->/

const RestaurantMenu = () => {
  const { id } = useParams();
  const restInfo = useRestaurantMenu(id);
  if (restInfo.length === 0 ) return <Shimer />;
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    feeDetails,
    sla,
  } = restInfo.data.cards[2].card.card.info;

  //<--- Return resturant menu data --->
  return (
    <div className="menu-wrapper">
      <div className="menu-card">
        <h1 className="menu-heading pd">{name}</h1>
        <div className="menu-detail ">
          <div className="ratings pd">
            <span>*</span>
            <span>
              {avgRating} <code>({totalRatingsString})</code>
            </span>
            <span className="dott">.</span>
            <span>{costForTwoMessage}</span>
          </div>
          <hr className="hr-line" />
          <div className="menu-link pd">
            <a href="#">
              <span>{cuisines[0]}</span>
            </a>
            <a href="#">
              <span>{cuisines[1]}</span>
            </a>
          </div>
          <div className="outlet-menu pd">
            <div className="dot-style">
              <div className="dots"></div>
              <div className="arrow-line"></div>
              <div className="dots"></div>
            </div>
            <div className="outlet-desc">
              <div className="outlet-head">
                <b>outlet</b>
                <span>{areaName}</span>
              </div>
              <div className="outlet-distance">
                <span>{sla.slaString}</span>
              </div>
            </div>
          </div>
          <hr />
          <div >
            <h5>{feeDetails.message}</h5>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default RestaurantMenu;
