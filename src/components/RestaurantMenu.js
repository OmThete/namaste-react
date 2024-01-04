import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const[showIndex,setShowIndex] = useState(0)

    if (resInfo === null) return <Shimmer />;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    // console.log("categories",categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p className="font-bold text-lg">
                {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
                 - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
            </p>
            {/*categories accordion */}
            {categories.map((category,index)=>(
                <RestaurantCategory  
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex(index)} //passing this as a function to child
                />
            ))}
        </div>
    )
}
export default RestaurantMenu;