import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [category, setCategory] = useState("Chicken");
    const [categoryList, setCategoryList] = useState([]);
    const [meals, setMeals] = useState([]);
    const [mealDetails, setMealDetails] = useState([]);
    const [ingrediants, setIngrediants] = useState();
    const [measure, setMeasure] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Context.Provider
            value={{
                category,
                setCategory,
                categoryList,
                setCategoryList,
                meals,
                setMeals,
                mealDetails,
                setMealDetails,
                ingrediants,
                setIngrediants,
                measure,
                setMeasure,
                isLoading,
                setIsLoading,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
