import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { isOpen, onClick } = props;

  return (
    <>
      <div className="  w-8/12 rounded-md mx-auto bg-gray-300">
        <div
          className="flex justify-between px-5 py-3 my-2 w-full  "
          onClick={onClick}
        >
          <div className="font-bold">
            {props.data.title} ({props.data.itemCards.length})
          </div>
          {isOpen ? <span>🔼</span> : <span>🔽</span>}
        </div>
        {isOpen && <ItemList data={props.data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
