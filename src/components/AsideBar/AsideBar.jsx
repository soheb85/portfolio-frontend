import myimg from '/upscalemedia-transformed.png'
import { Link } from 'react-scroll'
const AsideBar = () => {
  return (
    <div className="lg:w-[22%] lg:h-[100vh] lg:fixed lg:left-[200px] bg-gray-300 flex flex-col lg:block">
     
        <aside className='w-[100%]'>
            <div className='pt-10 flex justify-center'>
            <img src={myimg} alt="profile_img" className='border-7 border-red-200 rounded-full h-[380px] bg-white ' />
            </div>
            <h1 className=' font-semibold text-3xl text-center pt-4 text-gray-800'>SO<span className='text-red-500'>H</span>EB K<span className='text-red-500'>H</span>AN</h1>
            <h2 className='font-bold text-red-400 text-center pt-5'>Java Fullstack Developer <span className='text-gray-800'>/ Software Developer</span></h2>
            <div className='w-[100%]'>
                <ul className='list-none flex flex-col items-center pt-12 gap-4 font-semibold text-gray-700'>
                <Link to="home" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Home</a></li></Link>
                <Link to="about" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>About me</a></li></Link>
                <Link to="skill" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Skills</a></li></Link>
                <Link to="education" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Education</a></li></Link>
                <Link to="project" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Projects</a></li></Link>
                <Link to="resume" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Resume</a></li></Link>
                <Link to="contact" spy={true} smooth={true} duration={500} activeClass="text-red-600 underline"><li><a href="#" className='hover:text-red-500 hover:underline'>Contact</a></li></Link>
                </ul>
            </div>
            <div>
                <h1 className='text-center text-gray-500 pt-15 font-sans'>&copy;&nbsp;Copyright 2025 All Right Reserved</h1>
                <h1 className='text-gray-500 text-center'>Made by <span className='text-blue-600'>Soheb Khan</span> </h1>
            </div>
        </aside>
    </div>
  )
}

export default AsideBar
