import React  from "react";
import ReactDOM from "react-dom/client";
import {URL_IMAGE} from "../utils/constant.js";

const Card = (props) => {
    const { resData } = props; //Destructring of object
    const { info } = resData;
  
    return (
      <div className="card-container">
        <img
          alt="card-image"
          className="card-image"
          src={
            URL_IMAGE +
            info.cloudinaryImageId
          }
        />
        <div className="card-description">
          <h1 className="card-heading">{info.name}</h1>
          <h3 className="rating">
            * {info.avgRating} <span className="dot">.</span>{" "}
            <span className="distance">{info.sla.slaString}.</span>
          </h3>
          <h4 className="cuision">{info.cuisines.join(",")}</h4>
          <h4 className="location">{info.areaName}</h4>
        </div>
      </div>
    );
  };

export default Card;