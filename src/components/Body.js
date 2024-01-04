import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) 
      return ( 
        <h1>
            Lokks like you're offlne!! Please check your internet connection..
        </h1>
        );
        const {loggedInUser,setUserName} = useContext(UserContext);
    return (
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text"
                            className="border border-solid border-black"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                            // console.log(searchText);
                            // fliter the restaurant card and update the UI
                            const filteredRestaurant = listOfRestaurant.filter((res) =>
                                res.name && res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase)
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                        >
                            search
                        </button>
                    </div>
                    <div className="search m-4 p-4 flex items-center">
                        <button
                            className="px-4 py-2 bg-gray-100 rounded-lg"
                            onClick={() => {
                                const filteredList = listOfRestaurant.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setFilteredRestaurant(filteredList);
                            }}
                        >
                            Top Rated Restaurants
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
        )
}
export default Body;