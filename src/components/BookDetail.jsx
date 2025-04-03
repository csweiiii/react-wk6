import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import books from "../json/books.json";

export default function BookDetail({ book }) {
    const item = books.find((item) => item.ID === book.ID);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const addToCart = () => {
        if (qty <= 0 || qty > item.stock) {
            alert("Invalid quantity or not enough stock.");
            return;
        }
        dispatch(addCartItems({ ...item, qty }));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="book-detail">
            <div className="card bg-[#DCDDDF] lg:card-side shadow-sm flex justify-evenly">
                <figure>
                    <img 
                        src={item.cover} 
                        alt={item.title} 
                        className="rounded-xl w-full h-98 object-cover" 
                    />
                </figure>
                <div className="card-body pl-20">
                    <h1 className="card-title text-2xl">{item.title}</h1>
                    <p className="text-xl text-gray-800 text-left mb-4">{item.author}</p>
                    <p className="text-xl text-left flex-wrap w-200 mb-4">{item.summary.substring(0, 300)}...</p>
                    <p className="text-xl text-gray-800 text-left mb-4">Price: ${item.price}</p>
                    <p className="text-xl text-gray-800 text-left mb-4">Stock: {item.stock}</p>
                    <div className="flex items-center space-x-2 mb-4">
                        <label className="text-lg font-semibold">Quantity:</label>
                        <select 
                            className="border border-gray-300 p-2 rounded-lg"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                            {Array.from({ length: item.stock }, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <p className="text-xl font-semibold mb-4">Total Price: ${ (item.price * qty).toFixed(2) }</p>
                    <button 
                        className="btn btn-primary border-2 border-[#444d60] text-[#444d60] hover:bg-[#444d60] hover:text-white transition-all duration-300 px-6 py-2 rounded-lg"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                    {showToast && (
                        <div className="toast toast-top toast-center">
                            <div className="alert alert-success">
                                <span>已加入購物車！</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
