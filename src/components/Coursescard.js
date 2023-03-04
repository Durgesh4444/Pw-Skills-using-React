import React from "react";

const Coursescard = (props) => {
  return(
    <div className="flex flex-col bg-[#FBFEFF] justify-center py-[30px] px-[20px] drop-shadow-2xl  w-[25vw] rounded-[10px]">
    <img src={props.src} alt="img"></img>
    <h1 className="text-[#5A4BDA] text-[21px] font-bold mt-[5px] mb-[40px]">{props.name}</h1>
    <h3 className="mb-[10px]">{props.teacher}</h3>
    <h2 className="font-bold text-[19px]">{props.price}</h2>
    </div>
  );
}
export default Coursescard;
