import React from "react";
import { universityImg } from "../../assets";
import { AiFillEnvironment, AiFillPhone } from "react-icons/ai";

const UniversityCard = ({
  name,
  address,
  phone,
  degree,
  coursework,
  period,
}) => {
  return (
    <div className="w-full group/card bg-black bg-opacity-10 hover:bg-opacity-20 duration-300  rounded-lg p-4 xl:px-10 xl:py-10 flex lgl:flex-row flex-col justify-center  shadow-shadowOne gap-6 lgl:gap-10">
      <div className="w-full flex flex-col gap-6 lgl:gap-10">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover/card:scale-110 duration-300 cursor-pointer"
            src={universityImg}
            alt="bannerImg"
          />
        </div>
        <div className="flex flex-col justify-between lgl:items-center">
          <h3 className="text-xl md:text-2xl font-semibold group-hover/card:text-white duration-300">
            {name}
          </h3>
          <p className="text-md flex flex-row gap-2 mt-2 group/address text-gray-400">
            <span className="text-gray-200  inline-flex items-center group-hover/address:-translate-y-1 transition-all group-hover/address:text-designColor cursor-pointer duration-300">
              <AiFillEnvironment />{" "}
            </span>
            <span className="group-hover/address:-translate-y-1 cursor-pointer duration-300 group-hover/address:text-gray-50">
              {address}
            </span>
          </p>
          <p className="text-md flex flex-row gap-2 mt-2 group/address text-gray-400">
            <span className="text-gray-200  inline-flex items-center group-hover/address:-translate-y-1 transition-all group-hover/address:text-designColor cursor-pointer duration-300">
              <AiFillPhone />{" "}
            </span>
            <span className="group-hover/address:-translate-y-1 cursor-pointer duration-300 group-hover/address:text-gray-50">
              {phone}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 mt-4 md:mt-8 md:items-center">
          <h1 className="text-2xl md:text-3xl font-semibold group-hover/card:text-white duration-300">
            {degree}
          </h1>
          <p className=" text-designColor text-sm tracking-[1px]">{period}</p>
        </div>
        <div className="flex flex-col  text-gray-600">
          <span className="text-xl md:text- xl group-hover/card:text-gray-500">
            Coursework:
          </span>
          <p className="ml-4 mt-4 text-[18px] group-hover/card:text-gray-300">
            {coursework}
          </p>
          <ul className="ml-8 mt-4 group-hover/card:text-gray-300">
            <li>- Object Oriented Programming</li>
            <li>- Data Structure and Algorithm</li>
            <li>- Agile methodology</li>
            <li>- Web Development</li>
            <li>- Artificial Intelligence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
