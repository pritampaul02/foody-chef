import React, { useContext } from "react";
import { Context } from "../context/contextApi";

const CategoryContainer = ({ item }) => {
    const { category, setCategory } = useContext(Context);

    const isActive = category === item.strCategory;

    return (
        <div
            className="flex flex-col items-center justify-center"
            onClick={() => setCategory(item.strCategory)}
        >
            <div
                className={`h-14 w-14 aspect-square rounded-full ${
                    isActive ? "bg-amber-400" : "bg-slate-300"
                } `}
            >
                <img
                    src={item.strCategoryThumb}
                    alt={item.strCategory}
                    className="h-full w-full object-cover rounded-full"
                />
            </div>
            <p className="text-sm font-medium text-slate-500">
                {item.strCategory}
            </p>
        </div>
    );
};

export default CategoryContainer;
