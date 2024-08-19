import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../redux_slice/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatching an action
        dispatch(addItems(item));
    }
    return (
        <div className="flex flex-col items-center p-4">
            <ul className="w-full max-w-4xl">
                {items.map(item => (
                    <li
                        key={item.card.info.id}
                        className="bg-white rounded-lg shadow-lg mb-6 p-6 transform transition duration-500 hover:scale-105 relative"
                    >
                        <div className="relative">
                            <img 
                                src={CDN_URL + item.card.info.imageId} 
                                alt={item.card.info.name} 
                                className="w-[50%] h-64 object-cover rounded-t-lg mb-4 mx-auto"
                            />
                            <button 
                                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 z-10"
                                onClick={() => handleAddItem(item)}
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-semibold text-gray-800">
                                {item.card.info.name}
                            </span>
                            <span className="text-xl font-bold text-green-500">
                                ₹{(item.card.info.price / 100).toFixed(2)}
                            </span>
                        </div>
                        <p className="text-gray-600">
                            {item.card.info.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;
