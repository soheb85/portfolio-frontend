/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page4Skill = ({degree,college,address,year,score,link}) => {
    useEffect(() => {
             AOS.init({ duration: 1000 });
           }, []);
  return (
    <div className="mt-6" data-aos="fade-left">
        <div className="sm:h-[220px] sm:w-[80%]  rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="w-full" >
                <h1 className="sm:text-[27px] text-xl font-semibold p-5 tracking-tight text-gray-900">{degree}<span className="inline-block sm:ml-15 ml-5 sm:text-2xl h-8 w-20 bg-blue-100 rounded-lg text-gray-600 text-center tracking-wide shadow-[0_3px_10px_rgb(0,0,0,0.2)]">{year}</span></h1>
            </div>
            <div className="pt-2 pl-5">
                <h1 className="sm:text-[20px] text-gray-600 tracking-wider bg-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:underline"><a href={link} target="_blank" rel="noopener noreferrer"> {college} </a></h1>
                <h1 className="sm:text-lg text-gray-400 tracking-wider pt-3 ">{address}</h1>
            </div>
            <div className="mt-5 ml-4 h-9 w-[300px] bg-gray-200 items-center">
                <h1 className="pl-6 sm:text-2xl text-xl text-blue-500 font-semibold font-mono">{score}</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Page4Skill
