import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";
import { useState } from "react"

const RestaurantMenu = () => {
    const { resId } = useParams(); // Extract resId from useParams
    console.log(resId);

    const [isOpen, setIsOpen] = useState(false);
    const [showIndex , setShowIndex] = useState(0);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, avgRating, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(itemCards);

    return (
        
        <div className="text-center">
            {/* Accordian Header */}
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", " )} - {costForTwo / 100}
            </p>

            {category.map((category , index) => 
            //Controlled Component
            <RestaurantCategory
                key={category.card.card.title}
                data={category?.card?.card}
                isOpen={index=== showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />)}
        </div>
    );
};

export default RestaurantMenu;
