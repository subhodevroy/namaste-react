import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
//import resList from "../data/resList"
import { SWIGGY_LIVE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body =()=>{
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(SWIGGY_LIVE_URL);
       // const data_txt=await data.json()
        const json=await data.json()
       //console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setListOfRestraunt(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      /** 
       * Conditional Rendering
       * if(listOfRestaurants.length === 0){
       return <Shimmer />
        }
      */
      
      
       return (listOfRestaurants === undefined ||listOfRestaurants.length === 0)?<Shimmer />:(
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                       const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                       setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
           // console.log(filteredList)
            setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
            
                {filteredRestaurant.map(restaurant =>
               <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                
                )}
               
            </div>
        </div>
    )
}
export default Body;