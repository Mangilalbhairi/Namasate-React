import React from "react";
import { URL_IMAGE } from "../utils/constant.js";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { resData } = props; //Destructring of object
  const { cloudinaryImageId,
          id,
          name,
          avgRating,
          sla,
          cuisines,
          areaName } = resData.info;
  return (
    <>
      <div className="flex flex-col gap-1 w-[250px] p-3 transition-all">
        <Link to={"/reastraurnat/" + id}>
          <img
            alt="card-image"
            className="w-[245px] rounded-lg h-[230px] hover:scale-90 hover:z-0  transition-all"
            src={URL_IMAGE + cloudinaryImageId}
          />
        </Link>

        <div className="pl-6  overflow-hidden">
          <div className="font-bold">
            <h2 className="truncate">{name}</h2>
          </div>
          <h3 className="font-medium">
            * {avgRating} <span className="dot">.</span>{" "}
            <span className="font-semibold">{sla.slaString}.</span>
          </h3>
          <div className="font-medium">
            <h4 className="font-medium truncate">{cuisines.join(",").trim()}</h4>
          </div>
          <h4 className="font-bold">{areaName}</h4>
          
        </div>
      </div>
    </>
  );
};

export const withPromotedLabel = (Card) => {
  return(props) => {
    return (
      <div>
        <label className="absolute px-4 m-3 font-bold bg-slate-700 text-white rounded-sm mt-5 z-20">Promoted</label>
        <Card {...props}/>
      </div>
    )
  }
}

export default Card;
