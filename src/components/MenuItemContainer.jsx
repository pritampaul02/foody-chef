import React from "react";
import { Link } from "react-router-dom";

const MenuItemContainer = ({ item }) => {
    return (
        <Link to={`/meals/${item.idMeal}`} className="w-full">
            <div className="flex flex-col w-full h-64 md:h-80 bg-amber-100 rounded-lg overflow-hidden border-2 border-amber-600">
                <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-full object-cover"
                />
                <p className="px-1 py-2 text-black font-medium text-md">
                    {item.strMeal}
                </p>
            </div>
        </Link>
    );
};

export default MenuItemContainer;
