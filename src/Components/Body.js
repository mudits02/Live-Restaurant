import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";


const Body = () => {
    const [ListofRestaurants, setListOfRestaurants] = useState([]);
    const [seachRestaurntList , setSeachRestaurntList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setSeachRestaurntList(restaurants);
    };

    

    return ListofRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Search..." 
                        value={searchText} 
                        onChange={(event) => setSearchText(event.target.value)} 
                    />
                    <button 
                        onClick={() => {
                            const filteredRestaurant = ListofRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setSeachRestaurntList(filteredRestaurant);
                        }} 
                        className="search-btn"
                    >
                        Search
                    </button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = ListofRestaurants.filter((res) => res.info.avgRating > 4.0);
                        setSeachRestaurntList(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {seachRestaurntList.map((restaurant) => 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                )}
            </div>
        </div>
    );
};

export default Body;

