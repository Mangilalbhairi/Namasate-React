import React, { useState } from "react";
import Shimer from "./Shimerui.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

// <--- RestaurantMenu Component --->/

const RestaurantMenu = () => {
  const { id } = useParams();
  const restInfo = useRestaurantMenu(id);
  const [openIndex, setIndex] = useState(null);
  if (restInfo.length === 0) return <Shimer />;
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

  let categories =
    restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  const handleClick = (index) => {
    setIndex(openIndex === index ? null : index);
  };

  //<--- Return resturant menu data --->
  return (
    <>
      <h1>hello</h1>
      {categories.map((data, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={data.card.card}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </>
  );
};

export default RestaurantMenu;
