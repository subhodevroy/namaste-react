import { CDN_URL } from "../utils/constants"
const styleCard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData?.info
    return(
        <div className='res-card' style={styleCard}>
             <img className="res-img"alt="res-food" src={CDN_URL
                 +
                cloudinaryImageId}/>
            <h3>{name}</h3>
           <h4>{cuisines.join(',')}</h4>
           <h4>{costForTwo}</h4>
           <h4>{avgRating}</h4>
           <h4>{sla.deliveryTime}mins</h4>
        </div>
    )
}

export default RestaurantCard;