import React from "react";

const IngredientList = ({ item, index }) => {
    return (
        <div key={index} className="empty:hidden">
            {item === null ? "" : <div key={index}>.{item}</div>}
        </div>
    );
};

export default IngredientList;
