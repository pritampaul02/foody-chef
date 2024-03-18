import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col gap-6 items-center justify-center w-screen h-screen fixed z-50 top-0 bg-slate-950 text-white text-xl font-medium">
            <div className="w-20 h-20 aspect-square border-[8px] border-amber-400 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            Loading...
        </div>
    );
};

export default Loader;
