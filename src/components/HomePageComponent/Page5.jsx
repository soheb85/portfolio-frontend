import Page5Project from "../PagesComponents/Page5Project"

const Page5 = () => {
    const projects = [
        {name:"Ev-olution Frontend",para:"Front-end using react js and tailwind for ev cars",link:"https://github.com/soheb85/Ev-olution" ,image:"../Screenshot 2025-02-08 162734.png",aos:"zoom-out-right"},
        {name:"Employee Management",para:"Font-end using React-js Tailwindcss to perform CURD",link:"https://github.com/soheb85/ems-frontend", image:"../emsproject.png",aos:"zoom-out-left"},
        {name:"Employee Management",para:"Backend using Spring Boot and Database Postgres SQL EMS",link:"https://github.com/soheb85/ems-backend", image:"../Screenshot 2025-02-08 163214.png",aos:"zoom-out-right"},
        {name:"Portfolio Website",para:"Portfolio website using React-js and Tailwindcss",link:"https://github.com/soheb85/Portfolio", image:"/Screenshot 2025-02-08 175756 - Copy.png",aos:"zoom-out-left"},
    ]
  return (
    <div className="mt-25 sm:pl-8" id="project">
      <div>
        <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm">MY WORK</h2>
        <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider">PROJECTS</h1>
        </div>
        <div className="mt-25">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[80%] ml-8">
                {projects.map((project,index)=>(
                    <Page5Project key={index} {...project}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Page5
