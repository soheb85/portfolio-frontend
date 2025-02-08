/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Page3Skill = ({name,percentage,color}) => {

   useEffect(() => {
         AOS.init({ duration: 1000 });
       }, []);
  return (
    <div data-aos="zoom-in">
      <div className="mb-4">
    <div className="flex justify-between">
      <span className="text-gray-700 font-bold">{name}</span>
      <span className="text-sm font-semibold text-gray-800">{percentage}%</span>
      
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
      
    </div>
  </div>
    </div>
  )
}

export default Page3Skill
