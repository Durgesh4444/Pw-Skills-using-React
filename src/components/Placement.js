import React from "react";
import Heading from "./Heading";
import Card2 from "./Card2";

const Placement = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Heading text="Hall of fame" />
      <div className="flex justify-center gap-[50px]">
        <Card2
          src="https://hall-of-fame-cdn.pwskills.com/profilePictures/62fcb904a9f208001acc7171.jpeg"
          name="Sai Krishna Gorantla "
          com_name="Tredence Analytics,Data Analyst"
          massage="Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the..."
        />
        <Card2
          src="https://hall-of-fame-cdn.pwskills.com/profilePictures/637c4c193bf26a001a4ea4e7.jpeg"
          name="Dharmendra kumar Yadav"
          com_name="Cognizant,Data Scientist Associate"
          massage="Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data..."
        />
        <Card2
          src="https://hall-of-fame-cdn.pwskills.com/profilePictures/6384d4393bf26a001a510fcd.jpeg"
          name="SUNIL RAMESH DODDAMANI"
          com_name="Statistician 2, Epsilon"
          massage="Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you..."
        />
      </div>
      <h1 className="text-gray-500 font-bold mt-[50px] cursor-pointer">View More</h1>
    </div>
  );
};
export default Placement;
