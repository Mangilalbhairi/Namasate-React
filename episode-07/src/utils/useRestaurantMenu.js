import { useState, useEffect } from "react";
import { FETCH_URL } from "./constant";
const useRestaurantMenu = (id) => {
  const [resMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const data = await fetch(FETCH_URL + id);
    const json = await data.json();
    setRestaurantMenu(json);
  };
  return resMenu;
};
export default useRestaurantMenu;
