import {useEffect , useState} from "react";
import { RES_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

     const[resInfo , setResInfo] = useState(null);

    useEffect(() => {        
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API);

        const json = await data.json();
        console.log(json);

        setResInfo(json.data);
    }

    // const {name , cuisines, costForTwoMessage , avgRating} = resInfo?.cards[2]?.card?.card?.info;
    return (resInfo === null) ? <Shimmer /> : (
        <div className="res-menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h2>    
            <ul>
                <li>Burgers</li>
                <li>Cold Drink</li>
                <li>Biryani</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;