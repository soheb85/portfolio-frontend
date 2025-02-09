import simg from "../../assets/softwareimg.jpg";
import TypeWriterEffect from 'react-typewriter-effect';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page1 = () => {
 
  useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);

  return (
    <div className="w-[100%] relative" id="home">
      <div className="lg:w-[100%]">
      <img src={simg} alt="" className="w-full h-[100vh] lg:h-[100vh] object-cover"/>
      <div data-aos="zoom-out" className="absolute inset-0 flex flex-col justify-center left-[100px] lg:left-[180px] top-[-230px]  px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-black">Hi!</h2>
        <TypeWriterEffect
           textStyle={{
            
            color: '#fff',
            fontWeight: 700,
            fontSize: '4em',
          }} 
            startDelay={100}
            cursorColor="black"
            multiText={['I am Soheb Khan']}
            typeSpeed={100}
            
          />
          <TypeWriterEffect
           textStyle={{
            
            color: '#efcc00',
            fontWeight: 700,
            fontSize: '2em',
          }} 
            startDelay={1000}
            cursorColor="#efcc00"
            multiText={['Java Full Stack Developer']}
            hideCursorAfterText={false}
            typeSpeed={100}
            
          />
          
      </div>
      </div>
    </div>
  );
};

export default Page1;
