import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import axios from "axios";
import ReactPlayer from "react-player";
import IngredientList from "../components/IngredientList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const MealItemDetails = () => {
    const { mealDetails, setMealDetails, isLoading, setIsLoading } =
        useContext(Context);

    let { id } = useParams();
    // console.log(id);

    // fetxh data from api
    const fetchMealDetails = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            setMealDetails(data.meals[0]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMealDetails();
    }, []);

    let ingredientsArray = [];
    let obj = { ...mealDetails };
    for (let key in obj) {
        if (key.startsWith("strIngredient")) {
            // console.log(key);
            ingredientsArray.push(obj[key]);
        }
    }
    console.log(ingredientsArray);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex w-full h-full bg-slate-50 px-3">
                    {mealDetails.map((item) => {
                        return (
                            <div
                                className="flex w-full lg:h-full flex-col lg:flex-row gap-3"
                                key={item.idMeal}
                            >
                                <img
                                    src={item.strMealThumb}
                                    alt={item.strMeal}
                                    className="h-full py-2 rounded-3xl md:sticky md:left-0 md:top-0"
                                />
                                <div className="flex flex-col w-full pt-2">
                                    {/* Menu item name  */}
                                    <div className="flex flex-row items-center justify-between px-2">
                                        <div className="flex flex-col  mb-2">
                                            <h1 className="text-2xl font-medium text-slate-800">
                                                {item.strMeal}
                                            </h1>
                                            <div className="flex items-center">
                                                <div className="h-3 w-3 aspect-square rounded-full bg-amber-500 border mr-1"></div>
                                                <p className="text-sm md:text-lg text-slate-700 font-normal">
                                                    {item.strArea}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 text-base font-medium bg-amber-400 rounded-full cursor-pointer">
                                            {item.strCategory}
                                        </div>
                                    </div>
                                    {/* table of ingridiance and measurements  */}
                                    <div className="mx-2">
                                        <div className="text-slate-800 text-xl px-2 font-medium mt-3 border-b-2 border-amber-300">
                                            Ingreadiants {null}
                                        </div>
                                        <ul>
                                            {ingredientsArray.map(
                                                (item, index) => {
                                                    return (
                                                        <IngredientList
                                                            key={index}
                                                            item={item}
                                                            index={index}
                                                        />
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                    {/* instruction of cooking  */}
                                    <div className="mx-2">
                                        <div className="text-slate-800 text-xl px-2 font-medium mt-3 border-b-2 border-amber-300">
                                            Instructions
                                        </div>
                                        <p className="text-md text-justify">
                                            {item.strInstructions}
                                        </p>
                                    </div>

                                    {/* youtube link  */}
                                    <div className="w-full lg:w-[580px] h-auto aspect-video p-7 mx-auto reactPalyerContainer">
                                        <ReactPlayer
                                            controls={true}
                                            url={item.strYoutube}
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MealItemDetails;
