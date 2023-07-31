import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu=()=>{
    const [restInfo,setRestInfo]=useState(null)
    const {resId}=useParams()
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu =async()=>{
        const data = await fetch(
           MENU_API_URL +resId
        )
        const json=await data.json()
       // console.log(json)
        setRestInfo(json.data)
    }
    if(restInfo === null)
    {
   return <Shimmer />
    }
    console.log(resId)
    const {name,cuisines,costForTwoMessage,avgRating} =restInfo?.cards[0]?.card?.card?.info
   const itemCards=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
    return (
    <div className="menu">
        <h1>{name}</h1>
        <h5>Cuisines: {cuisines.join(',')} </h5>
        <p>{costForTwoMessage}</p>
       <h4>Menu</h4>  
        <ul>
           
        {itemCards.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price/100}
        </li>
        )}
       
        </ul>
    </div>
)
}
export default RestaurantMenu;