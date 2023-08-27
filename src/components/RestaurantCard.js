import { CDN_URL } from "../utils/constants"
const styleCard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=(props)=>{
    const {resData}=props
    //console.log(resData)
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData?.info
    return(
        
   
    <div data-testid="resCard" className="rounded overflow-hidden shadow-lg bg-gray-300 h-full hover:bg-gray-500">
      <img className="object-fill h-60 w-full" alt="res-food" src={CDN_URL
                 +
                cloudinaryImageId}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}
        <p className="text-gray-700 text-base">
        {cuisines.join(',')}
        </p>
      </div>
           <h4>{costForTwo}</h4>
           <h4>{avgRating}</h4>
           <h4>{sla.deliveryTime}mins</h4>
        </div>
    </div>
   

    )
}
export const withOfferLabel=(RestaurantCard)=>{
  return(props)=>{
    const {resData}=props
   // console.log(resData.info.aggregatedDiscountInfoV3)
   const discount=(resData?.info?.aggregatedDiscountInfoV3?.header)+" "+(resData?.info?.aggregatedDiscountInfoV3?.subHeader)
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{resData.info.aggregatedDiscountInfoV3.header?<h6>Offers: {discount}</h6> :resData.info.aggregatedDiscountInfoV3.discountCalloutInfo.message
 } </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;

