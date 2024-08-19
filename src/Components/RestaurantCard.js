import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    // Destructuring of Objects in Javascript , ? is optional chaining
    const { name, cuisines, deliveryTime, lastMileTravel, cloudinaryImageId } = resData?.info;

    return (
        <div className="m-4 p-4 w-[300px] bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img 
                className="w-full h-40 object-cover rounded-t-lg"
                alt="Restaurant Logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                <h4 className="text-gray-600 mb-2">{cuisines.join(", ")}</h4>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>Delivery: {deliveryTime} mins</span>
                    <span>{lastMileTravel} km away</span>
                </div>
            </div>
        </div>
    );
}

export const withVegLabel = (RestaurantCard) => {
    return (props) => { 
        return(
            <div className="relative m-4">
                <div className="absolute top-0 left-0 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded-t-lg rounded-b-lg z-10">
                    Pure Veg
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;
