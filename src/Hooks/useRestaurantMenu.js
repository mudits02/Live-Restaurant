import {useEffect , useState} from "react";
import { RES_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    } , [resId])

    const fetchData = async () => {
        const apiURL = RES_MENU_API + resId;
        console.log("Fetching data from: ", apiURL);
    
        const menuData = await fetch(apiURL);
        const json = await menuData.json();
        console.log("Fetched Data: ", json);
    
        setResInfo(json.data);
    }
    

    return resInfo;
}

export default useRestaurantMenu;