import Page2Skill from "../PagesComponents/Page2Skill"
import { IoBulbOutline } from "react-icons/io5";
import { GiSpiderWeb } from "react-icons/gi";
import { BsDatabase } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Page2 = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div data-aos="fade-left" className="mt-[50px] pl-8" id="about">
        <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm">ABOUT ME</h2>
        <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider">WHO AM I?</h1>
        <p className="text-gray-400 text-lg pt-15 tracking-wider pr-15"><span className="text-black font-semibold">Hi I'm Soheb Khan</span> good at solving problems and have strong technical skills, especially with
data. I face challenges with a positive attitude and stay focused on finding
solutions. I work well both on my own and with others, always doing my best
to meet and go beyond what’s expected.My goal is to keep improving and add
value to any team or project I work on.
</p>
<p className="text-gray-400 text-lg pt-4 tracking-wider pr-15">
I have completed a full-time 6-month training in Java Full Stack Development
from J Spider, Thane. During this training, I gained strong skills in Core Java,
HTML, CSS, and JavaScript, Advance Java, Hibernate, along with basic
knowledge of React.js, Express.js, and Tailwind CSS. I am also currently
learning Spring, and Spring Boot to enhance my technical abilities further.
</p>

<div data-aos="zoom-in" className="pt-15 w-full h-auto flex gap-18">
    <Page2Skill text="Application" border="border-blue-600" textColor="text-blue-600" Icons={CiMobile3}/>
    <Page2Skill text="Software" border="border-red-600" textColor="text-red-600" Icons={BsDatabase}/>
    <Page2Skill text="Web Design" border="border-yellow-600" textColor="text-yellow-600" Icons={GiSpiderWeb}/>
    <Page2Skill text="FullStack" border="border-purple-600" textColor="text-purple-600" Icons={IoBulbOutline}/>
</div>


      
    </div>
  )
}

export default Page2
