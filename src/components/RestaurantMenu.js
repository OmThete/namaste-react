import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    console.log("restaurant card data",resInfo?.cards[0]?.card?.card?.info);
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} - {"Rs."}{resInfo?.cards[0]?.card?.card?.info?.costForTwo/100}</p>
            <h2>Recommended Menu</h2>
            <ul>
                {itemCards.map(item=>
                    <li key={item.card.info.id}>
                        {item.card.info.name}-{"Rs."}
                        {item.card.info.price / 100 ||item.card.info.defaultPrice / 100}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default RestaurantMenu