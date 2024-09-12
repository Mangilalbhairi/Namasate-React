import React, { useState } from "react";

import { URL_IMAGE } from "../utils/constant";
const ItemList = (items) => {
  console.log(items, "item");
  return (
    <>
      {items.data.map((item) => {
        return (
          <div key={item.card.info.id} className="bg-stone-100 shadow-inner ">
            <div className="flex justify-between items-center py-5 ">
              <div className="flex flex-col justify-center px-4  w-8/12">
                <div className="flex items-center gap-1 text-orange-600 font-semibold ">
                  <span className="border border-solid border-green-800 w-[18] h-[18px] rounded-md flex justify-center items-center">
                    {" "}
                    <span className=" rounded-full bg-green-800 w-[8px] h-[8px] shadow-md "></span>
                  </span>
                  Bestseller
                </div>
                <div>
                  <h1 className="font-bold text-slate-600">
                    {item.card.info.name}
                  </h1>
                  <span className="font-semibold">
                    {item.card.info.price
                      ? "₹ " + item.card.info.price / 100
                      : "₹ " + item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <div>
                  <span className="text-green-800 font-bold">★{4.3}</span>
                  <span className="text-gray-600">(332k)</span>
                </div>
                <p className="leading-5  text-sm text-gray-600">
                  {item.card.info.description}
                </p>
              </div>
              <div className="flex flex-col items-center ">
                {item.card.info.imageId ? (
                  <img
                    className="w-[200px] h-[150px] overflow-hidden p-3 rounded-2xl shadow-sm"
                    src={URL_IMAGE + item.card.info.imageId}
                  />
                ) : (
                  <img
                    className="w-[200px] overflow-hidden p-3 rounded-2xl shadow-sm"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/11/eba20aa3-e8b1-403d-abd1-c9c256903d2c_8653fd1e-beb1-48d8-bbc7-908a802852e5.jpg"
                  />
                )}
                <button className="text-green-700 font-semibold px-6 mt-2 py-1 rounded-md border border-solid border-gray-300 hover:bg-slate-200 shadow-inner">
                  ADD
                </button>
                <span className="text-gray-600 text-sm">Customisable</span>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
