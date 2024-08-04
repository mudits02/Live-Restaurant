import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;

    //Destructuring of Objects in Javascript , ? is optional chaining
    const {name , cuisines , deliveryTime , lastMileTravel , cloudinaryImageId} = resData?.info;

    const styleCard = {
        backgroundColor : "#f0f0f0",
    }

    return(
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="logo"
                src={CDN_URL + 
                    cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;