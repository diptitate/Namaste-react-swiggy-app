import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) =>{    //takes resId for returning resInfo.

    const [resInfo, setResInfo] = useState(null);   //default value is null
    
    useEffect(() =>{    //fetch the data
        fetchData();
    }, []);   //we want to fetch data only once so uses empty paranthesis[]

    const fetchData = async() => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
       // const res = jsonData.data;
        setResInfo(jsonData.data);     //setResInfo(res);
    };

    return resInfo;
}

export default useRestaurantMenu;