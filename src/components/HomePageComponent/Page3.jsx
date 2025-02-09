import Page3Skill from "../PagesComponents/Page3Skill";

const Page3 = () => {
    const skills = [
        { name: "Core Java", percentage: 95, color: "bg-blue-500" },
        { name: "HTML5", percentage: 90, color: "bg-pink-500" },
        { name: "Tailwind", percentage: 70, color: "bg-green-500" },
        { name: "React Js", percentage: 70, color: "bg-red-500" },
        { name: "CSS3", percentage: 90, color: "bg-purple-500" },
        { name: "Oracle SQL", percentage: 95, color: "bg-blue-700" },
        {name:"Express Js", percentage:55, color:"bg-slate-800"},
        {name:"J2EE", percentage:70 , color:"bg-amber-700"},
        {name:"Hibernate", percentage: 75, color:"bg-cyan-600"},
        {name:"Spring Boot", percentage:65, color:"bg-indigo-800"},
        {name:"Tools - (Vs code, IntelliJ Idea, Postgres SQL)", percentage:95,color:"bg-emerald-800"},
        {name:"JavaScript",percentage:80,color:"bg-yellow-400"}
      ];
  return (
    <div id="skill">
      <div className="mt-[100px] pl-8">
      <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm">MY SPECIALTY</h2>
      <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider">MY SKILLS</h1>
      <p className="text-gray-400 text-sm sm:text-lg pt-15 tracking-wider pr-15">
      As a passionate and dedicated developer, I have built a strong foundation in web development and backend technologies. 
  I specialize in Java, JavaScript, and modern frameworks like React.js and Spring Boot, allowing me to create dynamic 
  and scalable applications. My expertise in database management with MySQL and Oracle enables me to efficiently 
  handle data-driven applications. I am always eager to learn new technologies, enhance my problem-solving skills, and 
  collaborate on innovative projects. My goal is to create user-friendly and optimized solutions that drive efficiency 
  and enhance user experiences.
      </p>
      </div>
        <div className="mt-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[80%] ml-8">
      {skills.map((skill, index) => (
        <Page3Skill key={index} {...skill} />
      ))}
    </div>
        </div>

    </div>
  )
}

export default Page3
