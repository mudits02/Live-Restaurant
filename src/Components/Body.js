import RestaurantCard from "./RestaurantCard";
import {restaurantList}  from "../utils/mockData";
import {useState} from "react"; 
import { restaurantList } from "../utils/mockData";

const Body = () => {

    const[ListofRestaurants , setListOfRestaurants] = useState(restaurantList)

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                   const filteredList = ListofRestaurants.filter((res) => res.data.avgRating > 4.0 )
                   setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {ListofRestaurants.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body;