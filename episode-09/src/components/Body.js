import React from "react";
import Card from "./Card.js";
import { useState, useEffect } from "react";
import Shimer from "../components/Shimerui.js";

// <--- Body Component start here --->
const Body = () => {
  // <--- declare local state variable here --->
  const [reastrantList, setreastrantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterReastrantList, setFilterReastrantList] = useState([]);

  // <--- Filter Top Rating --->
  const topRating = () => {
    const filterList = reastrantList.filter((data) => {
      return data.info.avgRating > 4;
    });
    setFilterReastrantList(filterList); //Update filterReastrantList
  };

  // <--- Searching card logic here ---->
  const inputText = (e) => {
    setSearchText(e.target.value);
  };

  const searchCard = () => {
    let filterCard = reastrantList.filter((card) => {
      return card.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterReastrantList(filterCard); //Update filterReastrantList
  };

  // <--- Fetch data from live swiggy api --->
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9185217&lng=75.78794669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    setreastrantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterReastrantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // <--- Return Body Component --->

  return filterReastrantList.length === 0 ? (
    <Shimer />
  ) : (
    <>
      <div className="Body">
        <div className="filter-container">
          <button className="btn" onClick={topRating}>
            Top Rating reastrant
          </button>

          <div className="search-container">
            <input
              type="text"
              name="username"
              className="search-box"
              value={searchText}
              onChange={inputText}
            />
            <button className="btn" onClick={searchCard}>
              Search
            </button>
          </div>
        </div>
        <h1 className="">Restaurants with online food delivery in Jaipur</h1>
        <div className="reastrant-card-container">
          {filterReastrantList.map((resObj) => {
            return <Card key={resObj.info.id} resData={resObj} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
