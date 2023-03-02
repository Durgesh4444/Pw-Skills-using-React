import React from "react";

const Card2 = (props) => {
  return (
    <div className="flex flex-col bg-[#FBFEFF] justify-center py-[50px] px-[20px] drop-shadow-2xl items-center w-[25vw] rounded-[10px]">
      <img src={props.src} alt="img" className="w-[120px] h-[120px] rounded-[50%] mb-[10px]"></img>
      <h1 className="text-[20px] font-bold mb-[15px]">{props.name}</h1>
      <h3 className="text-gray-700 mb-[15px]">{props.com_name}</h3>
      <h2 className="text-gray-700 text-[17px] text-center">{props.massage}</h2>
      <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG9.png" alt="" className="w-[28px] mt-[20px]"></img>
    </div>
  );
};
export default Card2;
