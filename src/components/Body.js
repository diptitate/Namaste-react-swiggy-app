import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Error from "./Error";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfData, setFilteredListOfData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("Type to search");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  //whenever state variable update, react trigger reconcilation cycle.
  //console.log("Body rendered", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data?.json();

    const restaurants =
    jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      console.log(`restaurants: ${restaurants}`);
    setListOfRestaurant(restaurants);
    setFilteredListOfData(restaurants);
  };

  console.log(listOfRestaurants);
  

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return(
      <h1>
      Looks like you are offline!! Please check your internet connection
      </h1>
    );  

  

  const {loggedInUser,setUserName} = useContext(UserContext);

  //if (listOfRestaurants.length === 0) return <Shimmer />;
 return (
    <div className="body">
      <div className="filter">
        <div className="search flex p-4 m-4">
          <input
            type="text"
            placeholder="Search Restaurant"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-[40%] border border-slate-700 rounded-md pl-9 shadow-sm focus:outline-none focus:border-zinc-600 focus:ring-zinc-600 focus:ring-1 sm:text-sm"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="search-btn ml-4 border bg-slate-600 text-white border-zinc-600 px-10 rounded-full hover:text-slate-600 hover:bg-white"
            onClick={() => {
              const filteredRest = listOfRestaurants.filter((r) => {
                return r.info?.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setFilteredListOfData(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex m-[2%]">
          <div className="filter-btn-container item-center p-[0.5%]">
            
            <button
              className="filter-btn border bg-slate-600 text-white border-zinc-600 hover:text-slate-600 hover:bg-white"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredListOfData(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
        
          </div>
          <div className="filter-btn-container item-center p-[0.5%]">
            <label className="">UserName: </label>
            <input 
              className="border border-black px-2" 
              value = {loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap gap-[2%] p-[2%]">
        {filteredListOfData.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>

         
            {restaurant.info.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardPromoted 
                resData={restaurant} 
                label={restaurant.info.aggregatedDiscountInfoV3.header}
              />
            ) : (
              <RestaurantCard  resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
