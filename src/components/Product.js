import React from "react";
import Heading from "./Heading";
import Productcard from "./Productcard";

const Product = () => {
  return (
    <>
      <Heading text="Our Products" />
      <div className="flex justify-center text-center item-center gap-[100px] mb-[80px]">
        <Productcard src="https://pwskills.com/images/landing-page/products/neurolab-icon.svg" name="PW Skills Lab" text="Supercharge your projects development with our robust lab."/>
        <Productcard src="https://pwskills.com/images/landing-page/products/jobPortal-icon.svg" name="Job Portal" text="Use exceptional templates for a stand-out resume minus the sign up process."/>
        <Productcard src="https://pwskills.com/images/landing-page/products/Internship-icon.svg" name="Experience portal" text="PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects"/>
    </div>
    <div className="flex justify-center text-center item-center gap-[100px]">
        <Productcard src="https://pwskills.com/images/landing-page/products/affilitatePortal-icon.svg" name="Become an affiliate" text="Explore affiliate marketing opportunities with PW Skills and attain financial freedom."/>
        <Productcard src="https://pwskills.com/images/landing-page/products/halloffame-icon.svg" name="Hall of fame" text="Our student placements and 100k+ career transition speak voloumes about our courses."/>
    </div>
    </>
  );
};
export default Product;
