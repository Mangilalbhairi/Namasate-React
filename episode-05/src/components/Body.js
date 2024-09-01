import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.js";
import reastrantLists from "../utils/mockData.js";
import { useState } from 'react';


const Body = () => {
  const [reastrantList,setreastrantList] = useState(reastrantLists);
  const topList = () => {
    const filterList = reastrantList.filter((data)=>{
    return data.info.avgRating > 4;
    })
    setreastrantList(filterList);
  }
 
    return (
      <><div className="Body">

        <div className="search-bar">Search</div>
        <div className="filter">
          <button className="filter-btn" onClick={topList}>Top Rating reastrant</button>
        </div>
        <div className="reastrant-card-container">
          {reastrantList.map((resObj) => {
            return <Card key={resObj.info.id} resData={resObj} />;
          })}
        </div>
        </div>
      </>
    );
  };

export default Body;