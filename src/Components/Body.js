import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {

    const[ListofRestaurants , setListOfRestaurants] = useState([])

    // useEffect(() => {
    //     console.log("useEffect called")
    // } , []);

    // console.log("Body rendered");

    useEffect(() => {
        fetchData()
    } , []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json = await data.json();

        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(restaurants);
    }

    // Conditional Rendering
    // if(ListofRestaurants.length === 0){
    //     return(
    //         <div className="shimmer">
    //             <Shimmer />
    //         </div>
    //     )
    // }

    return ListofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                   const filteredList = ListofRestaurants.filter((res) => res.info.avgRating > 4.0 )
                   setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {ListofRestaurants.map((restaurant) => 
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body;