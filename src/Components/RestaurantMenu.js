import {useEffect , useState} from "react";
import { RES_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const[resInfo , setResInfo] = useState(null);
    const resId = useParams();
    console.log(resId);

     useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        try {
            const TEMP_RES_API = RES_MENU_API + params
            const data = await fetch(TEMP_RES_API);
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu data:", error);
        }
    };
    
    
    if(resInfo === null)
    {
        return <Shimmer />
    }
    const {name , cuisines , avgRating , costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
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