import React from "react";

const hero = () => {
  return (
    <>
      <div className="w-full h-screen relative bg-[linear-gradient(263deg,#FFC2FF_-8.97%,#FFA4D6_43.93%,#FF8AA6_96.83%)] flex gap-10 flex-col items-center justify-center">
        <div>
          <h1 className="text-8xl font-bold text-white">Foodies’ Paradise</h1>
          <h3 className="text-[#F5EEEE] font-semibold text-4xl text-center">
            AI-Powered Recipes Just for You!
          </h3>
        </div>
        <div className="w-[70%]">
          <p className="text-[#797575] font-semibold text-center px-8">
            Get ready to explore a world of flavors with AI-powered recipe
            suggestions! Whether you have specific ingredients or just a
            craving, we help you discover the perfect dish. Say goodbye to
            boring meals and let smart recommendations transform your cooking
            experience!
          </p>
        </div>
        <div className="w-[20%] flex justify-between items-center">
          <button className="border-2 text-white font-semibold px-6 py-2 rounded hover:scale-[1.1] cursor-pointer">
            Sign In
          </button>
          <button className="border-2 text-white font-semibold px-6 py-2 rounded hover:scale-[1.1] cursor-pointer">
            Sign Up
          </button>
        </div>
        <img src="chef.png" className="absolute left-2 bottom-0 h-[290px]"/>
      </div>
    </>
  );
};

export default hero;
