import React  from "react";
import ReactDOM from "react-dom/client";
import {URL_IMAGE} from "../utils/constant.js";

const Card = (props) => {
    const { resData } = props; //Destructring of object
    const { cloudinaryImageId,
            name,
            avgRating,
            sla,
            cuisines,
            areaName
    } = resData.info;
  
    return (
      <div className="card-container">
        <img
          alt="card-image"
          className="card-image"
          src={
            URL_IMAGE +
            cloudinaryImageId
          }
        />
        <div className="card-description">
          <h1 className="card-heading">{name}</h1>
          <h3 className="rating">
            * {avgRating} <span className="dot">.</span>{" "}
            <span className="distance">{sla.slaString}.</span>
          </h3>
          <h4 className="cuision">{cuisines.join(",")}</h4>
          <h4 className="location">{areaName}</h4>
        </div>
      </div>
    );
  };

export default Card;