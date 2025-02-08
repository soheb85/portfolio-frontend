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
      <div className="w-[100%]">
        <img src={simg} alt="" className="h-[945px] w-[100%]"/>
        <div data-aos="zoom-out" className="absolute inset-0  items-center left-70 top-[250px]">
        <h2 className="text-5xl font-bold text-black">Hi!</h2>
        <TypeWriterEffect
           textStyle={{
            
            color: '#fff',
            fontWeight: 700,
            fontSize: '4em',
          }} 
            startDelay={100}
            cursorColor="black"
            multiText={['I,m Soheb Khan']}
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
