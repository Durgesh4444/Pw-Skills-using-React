import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1B2124] pt-[80px] pl-[100px] pb-[30px] flex gap-[220px] mt-[200px]">
      <div className="flex flex-col gap-[40px]">
        <img
          src="https://pwskills.com/images/PWSkills-white.png"
          alt="img"
          className="w-[180px]"
        ></img>
        <div className="text-[#fff] flex gap-[20px] text-[18px] pl-[10px]">
          <i class="fa-solid fa-envelope"></i>
          <h1 className="text-[15px]">
            <span className="font-semibold">Email us: </span>{" "}
            support@pwskills.com
          </h1>
        </div>
        <div className="text-[#fff] flex gap-[12px] text-[21px] cursor-pointer pl-[10px]">
          <i class="fa-brands fa-facebook-f hover:text-yellow-600"></i>
          <i class="fa-brands fa-instagram hover:text-yellow-600"></i>
          <i class="fa-brands fa-telegram hover:text-yellow-600"></i>
          <i class="fa-brands fa-youtube hover:text-yellow-600"></i>
          <i class="fa-brands fa-twitter hover:text-yellow-600"></i>
          <i class="fa-brands fa-linkedin hover:text-yellow-600"></i>
          <i class="fa-brands fa-discord hover:text-yellow-600"></i>
        </div>
        <div className="pl-[10px]">
          <img
            src="https://pwskills.com/images/iso-9001-2015.svg"
            alt="img"
            className="w-[80px]"
          ></img>
          <h1 className="text-[#fff] ml-[10px]">ISO 9001</h1>
        </div>
      </div>

      <div className="text-[#fff]">
        <h1 className="text-[28px] font-semibold">PW Skills</h1>
        <div className="w-[170px] h-[2px] bg-[#F9C38D] my-[20px]"></div>
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-[10px]">
            <h3>About us</h3>
            <h3>FAQs</h3>
            <h3>Privacy policy</h3>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3>Contact us</h3>
            <h3>Job assistance</h3>
            <h3>Terms and conditions</h3>
          </div>
        </div>
      </div>

      <div className="text-[#fff]">
        <h1 className="text-[28px] font-semibold">Products</h1>
        <div className="w-[170px] h-[2px] bg-[#F9C38D] my-[20px]"></div>
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-[10px]">
            <h3>PW Skills Lab</h3>
            <h3>Job Portal</h3>
            <h3>Experience portal</h3>
            <h3>Become an affiliate</h3>
            <h3>Hall of fame</h3>


          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
