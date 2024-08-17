import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Extract resId from useParams
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    console.log(itemCards);

    return (
        <div className="res-menu container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
                <h2 className="text-xl text-gray-600 mb-2">{cuisines.join(", ")}</h2>
                <div className="flex justify-center items-center space-x-4 text-gray-500">
                    <span className="text-lg font-semibold">Rating: {avgRating} ⭐</span>
                    <span className="text-lg font-semibold">Cost for Two: ₹{costForTwo / 100}</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Menu</h3>
                <ul className="space-y-4">
                    {itemCards.map((res_menu) => (
                        <li 
                            key={res_menu.card.info.id} 
                            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <span className="text-lg font-medium text-gray-800">{res_menu.card.info.name}</span>
                            <span className="text-lg text-gray-600">₹{res_menu.card.info.price / 100}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
