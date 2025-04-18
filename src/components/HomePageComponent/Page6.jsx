import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page6 = () => {
    useEffect(() => {
                 AOS.init({ duration: 1000 });
               }, []);
  return (
    <div className="mt-25 sm:pl-8" id="resume">
        <div>
        <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm pl-8">MY DETAILS</h2>
        <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider pl-8">RESUME</h1>
        </div>
      <div className=" mt-12 ml-30" data-aos="fade-right" >
      <a
        href="../SohebKhanCV (11).pdf" 
        download="../SohebKhanCV (11).pdf"
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        Download Resume
      </a>
    </div>
    </div>
  )
}

export default Page6
