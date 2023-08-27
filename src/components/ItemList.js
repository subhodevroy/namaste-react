import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice"
import { useDispatch } from "react-redux";
const ItemList=({items})=>{
    //console.log(items)
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
     //Dispatch an action
      dispatch(addItem(item))
    }
  return (
    <div>
       {
        items.map((item)=>(
            <div data-testid="foodItems"key={item.card.info.id} className="p-4 m-10 border-gray-200 border-b-2 text-left flex justify-between">
                 <div className="w-9/12">
                <div className="py-2">
                <h2 className="font-bold">{item.card.info.name}</h2>
                <h3 className="font-bold">₹{item.card.info.price ?item.card.info.price/100:item.card.info.defaultPrice/100}</h3>
                 </div>   
            <p className="text-xs">{item.card.info.description}</p>
                 </div>   
              <div className="w-3/12 p-4 relative mb-3">
              <img src={CDN_URL+item.card.info.imageId} className="full"/>
                <div className="absolute align-middle">
                <button className="h-8 ml-5 mb-5 px-5 text-sm text-black transition-colors duration-150 border border-black rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                onClick={()=>handleAddItem(item)}
                >Add +</button>
                   </div> 
              
              
                </div>  
            </div>

        ))
       }
    </div>
  )
}
export default ItemList;