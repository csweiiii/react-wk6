import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Header({ title, slogan }) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
    const [showCart, setShowCart] = useState(false);

    return (
        <header className="text-center flex flex-col items-center header relative w-full bg-[#444d60] p-4 text-white">
            <Link to="/">
                <h2 className="text-white pt-5 pb-2 text-3xl font-bold">
                    {title}
                </h2>
            </Link>
            <p className="text-gray-400 text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
                {slogan}
            </p>
            <div className="flex mt-5 justify-center">
                <hr className="my-[15px] mx-auto w-[500px] border-0 border-t-[6px] border-blue-200 opacity-80" />
            </div>
            <div className="absolute top-5 right-10">
                <button onClick={() => setShowCart(!showCart)} className="relative">
                    <FaShoppingCart size={30} className="cursor-pointer text-white" />
                    {totalQty > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                            {totalQty}
                        </span>
                    )}
                </button>
            </div>
            {showCart && (
                <div className="absolute top-14 right-10 bg-white text-black p-4 shadow-lg rounded-lg w-64">
                    <h3 className="text-lg font-bold border-b pb-2 mb-2">購物紀錄</h3>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="text-sm mb-2">
                                    {item.title} x {item.qty} - ${item.price * item.qty}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">購物車是空的</p>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
