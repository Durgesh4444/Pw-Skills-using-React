import React from "react";

const Navbar = ({ name }) => {
  return (
    <>
      <nav className="flex items-center py-[20px] px-[100px] justify-center">
        <img
          src="https://pwskills.com/images/PWSkills-main.png"
          className="w-[160px]"
          alt="logo"
        ></img>
        <img
          src="https://pwskills.com/images/search-icon.svg"
          alt="search-icon"
          className="relative left-[85px]"
        ></img>
        <input
          type="text"
          className="w-[50vw] h-[44px] border-solid border-[1px] border-gray-500 rounded-md pl-[50px] mx-[50px]"
          placeholder="What you want to learn?"
        ></input>
        <button className="bg-[#5A4BDA] text-[#fff] h-[40px] w-[180px] text-center font-medium rounded-md">
          Login / Register
        </button>
      </nav>
    </>
  );
};
export default Navbar;
