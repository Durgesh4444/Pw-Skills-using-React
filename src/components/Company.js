import React from "react";
import Companylogo from "./Companylogo";
import Heading from "./Heading";

const Company = () => {
  return (
    <div className="bg-[#EAECEF] flex flex-col justify-center mt-[100px] pb-[100px]">
      <Heading text="Our Achiever's Work with"/>
      <div className="flex gap-[100px] justify-center">
        <Companylogo add="https://pwskills.com/images/landing-page/companies/biocube.png" />
        <Companylogo add="https://pwskills.com/images/landing-page/companies/discite.png" />
        <Companylogo add="https://pwskills.com/images/landing-page/companies/bun&bradstreet.png" />
        <Companylogo add="https://pwskills.com/images/landing-page/companies/fork.png" />
        <Companylogo add="https://pwskills.com/images/landing-page/companies/geekyants.png" />
      </div>
    </div>
  );
};
export default Company;
