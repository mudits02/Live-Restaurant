import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux_slice/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button 
                className="p-2 m-2 bg-black text-white rounded-md"
                onClick={handleClearCart}
                >
                    Clear Cart</button>
                
                {cartItems.length === 0 ? <h1>Cart is empty , Add items</h1> : <ItemList items={cartItems} />}
                
            </div>
        </div>
    )
}

export default Cart;