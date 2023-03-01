import React from "react";
import Card1sub from "./Card1sub";

const Card1 = () => {
  return (
    <>
      <h1 className="text-center py-[70px] text-[#5A4BDA] text-[3rem] font-bold flex flex-col justify-center items-center">
        “Pure Hardwork, No Shortcuts!”
        <div className="w-[150px] h-[4px] bg-yellow-600 mt-[5px]"></div>
      </h1>

      <div className="flex justify-center gap-[15vw]">
        <Card1sub
          Text="Different Courses"
          Link="https://pwskills.com/images/landing-page/statistics/books-icon.svg"
          Number={600+"+"}
        />
        <Card1sub
          Text="Students Enrolled"
          Link="https://pwskills.com/images/landing-page/statistics/student-icon.svg"
          Number={700000+"+"}
        />
        <Card1sub
          Text="Successful Transition"
          Link="https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg"
          Number={10000+"+"}
        />
      </div>
    </>
  );
};
export default Card1;
