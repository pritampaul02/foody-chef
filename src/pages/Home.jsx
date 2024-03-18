import { useContext } from "react";
import React, { useEffect } from "react";

import axios from "axios";

// import backImg from "../assets/Food.jpeg";
import { Context } from "../context/contextApi";
import CategoryContainer from "../components/CategoryContainer";
import MenuItemContainer from "../components/MenuItemContainer";
import Loader from "./Loader";

const Home = () => {
    const {
        categoryList,
        setCategoryList,
        meals,
        setMeals,
        category,
        isLoading,
        setIsLoading,
    } = useContext(Context);

    // console.log(category);
    // console.log(
    //     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    // );

    const fetchCategory = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            setCategoryList(data.categories);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchMeals = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );
            setMeals(data.meals);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(meals);

    useEffect(() => {
        fetchCategory();
        fetchMeals();
    }, [category]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col w-full pb-16">
                    {/* <div className="w-full bg-black flex items-center py-4 px-3">
                        <img src={backImg} alt="Food" className="w-[60%]" />
                        <div>
                            <h1 className="text-white text-xs  md:text-3xl font-normal md:font-medium">
                                Make your fevourite food...
                            </h1>
                            <h1 className="text-white text-md md:text-xl lg:text-4xl md:font-medium">
                                At your{" "}
                                <span className="text-amber-600 text-xl md:text-2xl lg:text-5xl font-bold">
                                    Home
                                </span>
                            </h1>
                        </div>
                    </div> */}
                    <div className="sticky top-0 bg-slate-50 py-2 flex flex-row lg:items-center lg:justify-center w-full overflow-x-scroll lg:overflow-x-auto gap-3 px-4">
                        {categoryList.map((item, index) => {
                            return (
                                <CategoryContainer item={item} key={index} />
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 flex-wrap gap-2 justify-normal px-3 lg:px-10 mt-3">
                        {meals.map((item, index) => {
                            return (
                                <MenuItemContainer item={item} key={index} />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
