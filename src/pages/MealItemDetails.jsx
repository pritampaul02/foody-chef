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
            setMealDetails(data.meals);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMealDetails();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex w-full h-full bg-slate-50 px-3">
                    {mealDetails.map((item) => {
                        console.log(
                            item.strMeasure20.length >= 2 ? "Do" : "OO"
                        );
                        console.log(item.strIngredient20.length);
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
                                            {item.strIngredient1.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure1}
                                                ${item.strIngredient1}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient2.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure2}
                                                ${item.strIngredient2}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient3.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure3}
                                                ${item.strIngredient3}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient4.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure4}
                                                ${item.strIngredient4}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient5.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure5}
                                                ${item.strIngredient5}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient6.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure6}
                                                ${item.strIngredient6}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient7.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure7}
                                                ${item.strIngredient7}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient8.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure8}
                                                ${item.strIngredient8}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient9.length >= 2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure9}
                                                ${item.strIngredient9}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient10.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure10}
                                                ${item.strIngredient10}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient11.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure11}
                                                ${item.strIngredient11}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient12.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure12}
                                                ${item.strIngredient12}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient13.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure13}
                                                ${item.strIngredient13}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient14.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure14}
                                                ${item.strIngredient14}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient15.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure15}
                                                ${item.strIngredient15}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient16.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure16}
                                                ${item.strIngredient16}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient17.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure17}
                                                ${item.strIngredient17}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient18.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure18}
                                                ${item.strIngredient18}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient19.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure19}
                                                ${item.strIngredient19}`}
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {item.strIngredient20.length >=
                                            2 ? (
                                                <li className="flex items-center gap-2">
                                                    <div className="h-2 w-2 rounded-full bg-amber-300"></div>
                                                    {`${item.strMeasure20}
                                                ${item.strIngredient20}`}
                                                </li>
                                            ) : (
                                                <></>
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
