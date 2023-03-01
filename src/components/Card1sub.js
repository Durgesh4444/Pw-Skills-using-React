import React from "react";

const Card1sub = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <img
          src={props.Link}
          className="w-[180px] flex justify-center"
          alt=""
        ></img>
      </div>
      <h1 className="text-[38px] font-semibold text-center py-[5px]">{props.Number}</h1>
      <p className="text-[30px] font-[600] text-gray-600">{props.Text}</p>
    </div>
  );
};
export default Card1sub;
