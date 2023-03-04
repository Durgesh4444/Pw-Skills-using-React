import React from "react";

const Heading =(props)=>{
    return(
        <>
        <h1 className="text-center py-[70px] text-[#5A4BDA] text-[3rem] font-[650] flex flex-col justify-center items-center">
        {props.text}
        </h1>
        </>
    );
}
export default Heading;