import React from "react";
import ReactDOM from "react-dom/client";
import { URL_IMAGE } from "../utils/constant.js";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { resData } = props; //Destructring of object
  const { cloudinaryImageId, id, name, avgRating, sla, cuisines, areaName } =
    resData.info;
  return (
    <>
      <div className="card-container">
        <Link to={"/reastraurnat/" + id}>
          <img
            alt="card-image"
            className="card-image"
            src={URL_IMAGE + cloudinaryImageId}
          />
        </Link>

        <div className="card-description">
          <div className="card-heading">
            <h2>{name}</h2>
          </div>
          <h3 className="rating">
            * {avgRating} <span className="dot">.</span>{" "}
            <span className="distance">{sla.slaString}.</span>
          </h3>
          <div className="cuision">
            <h4>{cuisines.join(",").trim()}</h4>
          </div>
          <h4 className="location">{areaName}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
