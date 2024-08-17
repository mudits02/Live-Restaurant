import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Body = () => {
    const [ListofRestaurants, setListOfRestaurants] = useState([]);
    const [seachRestaurntList, setSeachRestaurntList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();

        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurants);
        setSeachRestaurntList(restaurants);
    };

    return ListofRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body bg-gray-100 min-h-screen py-8 px-4 md:px-12">
            <div className="filter mb-8">
                <div className="search flex items-center justify-center mb-6">
                    <input 
                        type="text" 
                        className="m-4 p-4 w-full max-w-md rounded-l-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm" 
                        placeholder="Search for restaurants..." 
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
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-r-full transition-transform transform hover:scale-105 shadow-md"
                    >
                        Search
                    </button>
                </div>
                <div className="text-center">
                    <button 
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                        onClick={() => {
                            const filteredList = ListofRestaurants.filter((res) => res.info.avgRating > 4.0);
                            setSeachRestaurntList(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {seachRestaurntList.map((restaurant) => 
                    <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/" + restaurant.info.id} 
                        className="transform transition-transform hover:scale-105"
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Body;
