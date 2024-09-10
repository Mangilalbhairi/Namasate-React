import React, {useEffect, useState} from "react";
import {FETCH_URL} from "./constant"
const useRestaurantMenu = (id) => {
    const [restInfo, setRestInfo] = useState([])
    useEffect(() => {
       fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(FETCH_URL + id);
        const json = await data.json()
        setRestInfo(json)
    }
    return restInfo;
}
export default useRestaurantMenu;
