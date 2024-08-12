import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Extract resId from useParams
    console.log(resId);

    
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null)
    {
        return <Shimmer />
    }
    if (!resInfo) {
        return <Shimmer />;
    }
    
    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    
    console.log(itemCards);
    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{avgRating}</h3>
            <h3>{"Rs: " + costForTwo / 100}</h3>    
            <ul>
                {itemCards.map(res_menu => <li key={res_menu.card.info.id}>{res_menu.card.info.name} - {res_menu.card.info.price/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;