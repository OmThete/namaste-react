import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resData} = props
    const { 
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines,
        costForTwoMessage,
        sla, 
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img
             alt="res-logo"
             className="rounded-lg"
             src={CDN_URL + cloudinaryImageId}
             />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoMessage}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}
export const withPromotedLabel= (RestaurantCard) =>{
    return (props)=>{
        return ( 
        <div>
            <p>Promoted</p>
            <RestaurantCard {...props} />
        </div>
    )}
}
export default RestaurantCard;