/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page5Project = ({name,para,link,image,aos}) => {
    useEffect(() => {
                 AOS.init({ duration: 1000 });
               }, []);

  return (
    <div data-aos={aos}>
      <div className="h-[420px] w-[340px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="p-2 object-cover">
            <img className="rounded-xl h-[240px] w-full object-cover" src={image} alt="" />
        </div>
        <div className="w-full m-auto p-3">
            <h1 className="text-blue-600 font-semibold text-2xl text-center">{name}</h1>
            <p className="text-gray-500 font-mono text-center text-lg pt-2">{para}</p>
            <div className="flex justify-around p-3">
            <h1 className="font-sans font-semibold">For more Details</h1>
            <button className="bg-gray-300 h-8 w-28 rounded-lg text-gray-800 font-semibold hover:bg-gray-200"> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Github Repo</a>
            </button>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page5Project
