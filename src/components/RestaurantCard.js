import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} =props; 
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      
    }= resData?.info;
  
    
    return(
      <div className="m-4 p-4 w-[250px] rounded-lg flex-auto" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo rounded-lg"
              alt="res-logo" src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
      </div>
  
    );
  };

  // Higher Order Component
  // input - resto-card, output - resto-card with promoted
  
  export const withPromtedLabel = (RestaurantCard) =>{

    return ({ resData, label }) => {    //return new component as promoted restaurant //fuctional component
      console.log(label);
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{label}</label>
          <RestaurantCard resData={resData} />
          
        </div>
      )
    }

  }

  export default RestaurantCard;