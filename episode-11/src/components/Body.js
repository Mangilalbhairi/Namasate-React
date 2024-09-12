import React, { useContext } from "react";
import Card, { withPromotedLabel } from "./Card.js";
import { useState, useEffect } from "react";
import Shimer from "../components/Shimerui.js";
import UserContext from "../utils/UserContext.js";
// <--- Body Component start here --->
const Body = () => {
  // <--- declare local state variable here --->
  const [reastrantList, setreastrantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterReastrantList, setFilterReastrantList] = useState(null);
  const RestaurantCardPromoted = withPromotedLabel(Card);
  const { loggedInUser, setUserName } = useContext(UserContext);

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

  return filterReastrantList === null ? (
    <Shimer />
  ) : (
    <>
      <div className="bg-purple-200">
        <div className="flex gap-10 py-6 px-10 border">
          <button
            className="border border-solid border-purple-950 px-6 rounded-md text-white bg-purple-500"
            onClick={topRating}
          >
            Top Rating reastrant
          </button>

          <div>
            <label>UserName: </label>
            <input
              type="text"
              name="username"
              className="px-8 border border-solid border-purple-950 text-white rounded-md bg-transparent"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              name="username"
              className="px-8 border border-solid border-purple-950 text-white rounded-md bg-transparent"
              value={searchText}
              onChange={inputText}
            />
            <button
              className="border border-solid border-purple-950 text-white rounded-md px-8 bg-purple-500 "
              onClick={searchCard}
            >
              Search
            </button>
          </div>
        </div>
        <h1 className="text-dark px-10 mx-20 font-semibold">
          Restaurants with online food delivery in Jaipur
        </h1>
        <div className="flex gap-3  flex-wrap px-10 py-5 justify-center">
          {filterReastrantList.map((resObj) => {
            // return <Card key={resObj.info.id} resData={resObj} />;
            return Number(resObj.info.totalRatingsString) > 30 ? (
              <RestaurantCardPromoted key={resObj.info.id} resData={resObj} />
            ) : (
              <Card key={resObj.info.id} resData={resObj} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
