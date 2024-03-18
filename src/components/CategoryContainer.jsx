import React, { useContext } from "react";
import { Context } from "../context/contextApi";

const CategoryContainer = ({ item }) => {
    const { setCategory } = useContext(Context);

    return (
        <div
            className="flex flex-col items-center justify-center"
            onClick={() => setCategory(item.strCategory)}
        >
            <div className="h-14 w-14 aspect-square rounded-full bg-slate-300">
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
