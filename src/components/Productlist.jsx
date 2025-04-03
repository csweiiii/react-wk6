import { BrowserRouter, Routes, Route, Link } from "react-router";
import bookItem from "../json/books.json";

export default function Productlist() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {bookItem.map((item) => (
        <div key={item.ID} className="card bg-[#DCDDDF] bg-blue-100 w-95 shadow-sm  transition-colors duration-500">
          <figure className="px-10 pt-10">
            <img src={item.cover} alt={item.title} className="rounded-xl w-full h-98 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.author}</p>
            <p className="mt-2">{item.summary.substring(0, 100)}...</p>
            <p className="font-bold mt-2">${item.price}</p>
            <div className="card-actions mt-2">
            <Link to={`/BookIntroduction/${item.ID}`}
              className="btn btn-primary border-2 border-[#444d60] text-[#444d60] hover:bg-[#444d60] hover:text-white transition-all duration-200 px-4 py-1 rounded-lg mt-4"
            >
              Learn More
            </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}