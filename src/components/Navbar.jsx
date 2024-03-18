import React from "react";
import { IoIosSearch } from "react-icons/io";
import Logo from "../assets/_ba733be8-e62d-4aab-bb50-18b1a0c7c1e7.jpeg";

const Navbar = () => {
    return (
        <div className="flex items-center justify-center h-16 bg-slate-800 text-amber-600 w-full md:sticky">
            <div className="flex items-center justify-between px-4 w-full">
                <div className="flex flex-row items-center justify-center gap-2 text-2xl font-bold">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-12 w-12 border-none rounded-full"
                    />
                    <span className="hidden md:inline-block">FoodyChef</span>
                </div>
                <div className="group flex items-center md:relative">
                    <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-amber-100 rounded-l-3xl group-focus-within:border-amber-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                            <IoIosSearch className="text-white text-xl " />
                        </div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Search..."
                            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                            // onChange={(e) => setSearchQuery(e.target.value)}
                            // onKeyUp={searchQueryHandler}
                            // value={searchQuery}
                        />
                    </div>
                    <button
                        title="Search"
                        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-amber-100 hover:border-amber-500 rounded-r-3xl bg-amber-100 hover:bg-amber-500 transition-all"
                        // onClick={() => searchQueryHandler("searchButton")}
                    >
                        <IoIosSearch className="text-slate-500 text-xl " />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
