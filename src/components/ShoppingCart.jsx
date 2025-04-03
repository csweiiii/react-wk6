import { useState } from "react";
import CartIcon from "../components/CartIcon";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";

export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const cartItems = useSelector(selectCartItems) || [];
    const count = cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);

    return (
        <div className="relative">
            <div 
                onClick={toggleModal} 
                className="inline-block absolute right-2 md:right-6 cursor-pointer flex justify-end"
            >
                <div className="indicator">
                    {count > 0 && (
                        <span className="indicator-item badge bg-purple-400 text-white">
                            {count}
                        </span>
                    )}
                    <CartIcon />
                </div>
                <p className="text-xs opacity-60 mt-[-4px]">Shopping Bag</p>
            </div>
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-xl">Shopping Cart</h2>
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        <div className="flex justify-between">
                                            <span>{item.title}</span>
                                            <span>{item.qty} x ${item.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                        <div className="modal-action">
                            <button onClick={toggleModal} className="btn">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
