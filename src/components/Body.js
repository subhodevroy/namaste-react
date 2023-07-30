import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resList from "../data/resList"
const Body =()=>{
    const [listOfRestaurants, setListOfRestraunt] = useState(resList);
   
       return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredList)
            setListOfRestraunt(filteredList);
          }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>

                {listOfRestaurants.map(restaurant =>
               <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                
                )}
               
            </div>
        </div>
    )
}
export default Body;