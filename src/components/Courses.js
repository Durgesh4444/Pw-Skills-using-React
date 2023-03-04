import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Coursescard from "./Coursescard";

const Courses = () => {
  return (
    <>
      <div>
        <Heading text="Popular Programs" />
        <Subheading text="Most in demand and watched by people." />
        <div className="flex gap-[50px] justify-center">
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ecf58899439c8d7ebdc6.jpg"
            name="Full Stack Web Development"
            teacher="Hitesh Choudhary"
            price="₹2975.00"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2f0198899433e697ec2ac.jpg"
            name="Java with DSA and system design"
            teacher="Priya Bhatia"
            price="₹2975.00"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ea7e8899438ee77eae5a.jpg"
            name="Data Science masters"
            teacher="Krish Naik"
            price="₹2975.00"
          />
        </div>
        <h1 className="text-gray-500 font-bold mt-[50px] text-center cursor-pointer">View More</h1>
      </div>
 {/* -----------------------------------------------------------  */}
      <div>
        <Heading text="Affordable Programs" />
        <Subheading text="Find your favourite courses in pocket-friendly ways." />
        <div className="flex gap-[50px] justify-center">
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ecf58899439c8d7ebdc6.jpg"
            name="Full Stack Web Development"
            teacher="Hitesh Choudhary"
            price="₹2975.00"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63eb1ae1194b22195fe5d967.jpg"
            name="Decode DSA with C++"
            teacher="Sanket Singh"
            price="₹2475.00"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ea7e8899438ee77eae5a.jpg"
            name="Data Science masters"
            teacher="Krish Naik"
            price="₹2975.00"
          />
        </div>
        <h1 className="text-gray-500 font-bold mt-[50px] text-center cursor-pointer">View More</h1>
      </div>
{/* --------------------------------------------- */}
      <div>
        <Heading text="Community Programs" />
        <Subheading text="Open to all pro-live classes on Youtube for free." />
        <div className="flex gap-[50px] justify-center">
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a0ba6180762892138f404f.jpg"
            name="C++ Foundation"
            teacher="Urvi Goel"
            price="FREE"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63f6f3b4a9d3a25d2eb43ba3.jpg"
            name="Stock Market Fundamentals"
            teacher="Kanan Bahl"
            price="FREE"
          />
          <Coursescard
            src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a0bfb680762882188f490b.jpg"
            name="Business Analytics Foundations"
            teacher="Gopal Sharma"
            price="FREE"
          />
        </div>
        <h1 className="text-gray-500 font-bold mt-[50px] text-center cursor-pointer">View More</h1>
      </div>
      
    </>
  );
};
export default Courses;
