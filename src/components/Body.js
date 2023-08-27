import RestaurantCard,{withOfferLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
//import resList from "../data/resList"
import { SWIGGY_LIVE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utils/userContext";
const Body =()=>{
  //console.log("Clicked")
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    const RestaurantCardOffer=withOfferLabel(RestaurantCard)
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(SWIGGY_LIVE_URL);
        const json=await data.json()
       // console.log(json)
        //console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
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
      
      const onlineStatus=useOnlineStatus();
      if(onlineStatus ===false){
        return <h1>Looks you're offline!!Please check connection</h1>
      }
      const {loggedInUser,setUserName} =useContext(UserContext)
       return (listOfRestaurants === undefined ||listOfRestaurants.length === 0)?<Shimmer />:(
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                       const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                       setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
           // console.log(filteredList)
            setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurant
          </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <label>Username : </label>
                <input className="border border-black p-2 m-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>
            </div>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            
                {
                filteredRestaurant.map(restaurant =>
            <Link to={"/restaurants/"+restaurant.info.id } key={restaurant.info.id} className="res-link">
             {
                //If there are offer,then display it
              restaurant.info.aggregatedDiscountInfoV3?<RestaurantCardOffer resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
             }
            </Link>                    
            )
                }
               
            </div>
        </div>
    )
}
export default Body;