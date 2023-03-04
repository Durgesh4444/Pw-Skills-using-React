import React from "react";

const Productcard = (props) =>{
return (
    <div className="w-[300px] flex flex-col justify-center">
        <div className="flex justify-center">
        <img src={props.src} alt="img" className="w-[170px] h-[170px] mb-[20px]"></img>
        </div>
        <h1 className="text-[24px] font-bold text-center py-[5px] mb-[20px]">{props.name}</h1>
        <h2 className="text-[19px] text-center text-gray-500">{props.text}</h2>
    </div>
);
}
export default Productcard;