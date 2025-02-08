import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { addMessage } from "../../utility/server";
const Page7 = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        addMessage(formData)
        .then((res)=>alert("Message Sent! We will get back to you soon."))
        .catch((err)=>alert("No able to Contact"))
        setFormData({ name: "", email: "", message: "" });
        window.location.reload();
      };

       useEffect(() => {
                   AOS.init({ duration: 1000 });
                 }, []);
  return (
    <div className="mt-25 pl-8" id="contact" >
        <div>
        <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm">GET IN TOUCH</h2>
        <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider">CONTACT</h1>
        </div>
        
      <section className="bg-white" data-aos="fade-down" >
  <div className="py-8 lg:py-16 px-4 max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-wide font-extrabold text-center text-gray-900">
      Hire Me
    </h2>
    
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.name}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="name@example.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
            onChange={handleChange}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
          placeholder="Enter Subject"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
        name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a message..."
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-md font-semibold tracking-wide text-center text-white rounded-lg bg-blue-700 hover:bg-blue-500"
      >
        Send message
      </button>
      
      
    </form>
  </div>
  <div className="flex  space-x-6 mt-4 pb-15 pl-4">
  <a href="https://www.linkedin.com/in/soheb-khan-574199247/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" ><h1 className="text-4xl"><IoLogoLinkedin/></h1></a>
  <a href="https://github.com/soheb85" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700"> <h1 className="text-4xl"><FaGithub/></h1> </a>
  <a href="https://wa.me/+919324458770" target="_blank" rel="noopener noreferrer"  className="text-green-600 hover:text-green-800"> <h1 className="text-4xl"><FaSquareWhatsapp/></h1> </a>
  
</div>
</section>
    </div>
    
  )
}

export default Page7
