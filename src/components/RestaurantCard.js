import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard =(props) => {
    const {resData} = props
    const { 
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines,
        costForTwo,
        sla, 
    } = resData?.info;
    return (
        <div className="res-card">
            <img
             alt="res-logo"
             className="res-logo"
             src={CDN_URL + cloudinaryImageId}
             />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}
export default RestaurantCard;