import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {        {/*showItems comes from parent-component RestaurantMenu */}
    console.log(data);

    

    const handleClick = () => {
       // setShowItems(!showItems);
       setShowIndex();
    };
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" 
                     onClick={handleClick}
                > {/* handleClick function will call onClick event */}
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>    

                {/* Accordion Body */}
                { showItems && 
                    <ItemList items={data.itemCards} 
                        dummy ={dummy}
                    />
                }  {/* is showItems is ture then only display the itemlist*/}
            </div>
            
            
            
        </div>
    );
};
export default RestaurantCategory;