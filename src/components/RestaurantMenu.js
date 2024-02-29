import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>{
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const dummy = "dummy data";
    
    if (resInfo === null) return <Shimmer />;
     
      console.log(resInfo);

      const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
        
        resInfo?.cards[0]?.card?.card?.info; 


      const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

      console.log(itemCards);

      {/*----const categories = itemCards.filter((card) =() => {
        return card?.card?.card?.title && card?.card?.card?.itemCards;
      });  --------*/}

      const categories = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.["card"]?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

      );
    
      
      console.log(categories);

      return (
        <div className="menu text-center">
          <h1 className="font-bold py-4 my-6 text-lg">{name}</h1>
          <p className="font-bold">{cuisines.join(", ")} - 
          {costForTwoMessage}
          </p>
          {/*---<ul>
            {itemCards.map((item) => {
              return (
                <li className="font-bold">
                 {item.card.info.name} - {`Rs.${item.card.info.price / 100}`}
                </li>
              );
            })}
          </ul>----Recommended items-*/}
          {/*----categories accordian-----------*/}
          {categories.map((category, index) => (
            <
              //controlled component
              RestaurantCategory 
                key= {category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy ={dummy}
            />
          ))}
        </div>
      );

}
export default RestaurantMenu;