import React from "react";

const Heading =(props)=>{
    return(
        <>
        <h1 className="text-center py-[70px] text-[#5A4BDA] text-[3rem] font-bold flex flex-col justify-center items-center mb-[30px]">
        {props.text}
        </h1>
        </>
    );
}
export default Heading;