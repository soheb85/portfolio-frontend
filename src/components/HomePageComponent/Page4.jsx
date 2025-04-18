import Page4Skill from "../PagesComponents/Page4Skill"


const Page4 = () => {
    const education = [
        {degree:"Bachelor In Electronic And Computer Science ",college:"Shah & Anchor Kutchhi Engineering College",address:"Address:- Chembur, Mumbai, Maharashtra", year:"2024", score:"CGPI - 7.75",link:"https://www.sakec.ac.in/"},
        {degree:"Diploma In Computer Engineering ",college:"Vidyalankar Polytechnic",address:"Address:- Vadala, Mumbai, Maharashtra", year:"2021", score:"Percentage - 78.80%",link:"https://vpt.edu.in/"},
        {degree:"Higher Secondary Certificate ",college:"ASJC Bunt's Sangha College",address:"Address:- Kurla, Mumbai, Maharashtra", year:"2017", score:"Percentage - 53.00%",link:"https://asjc.bunts.edu.in/"},
        {degree:"Secondary School Certificate ",college:"S.K.Pantwalavalkar English High School",address:"Address:- Kurla, Mumbai, Maharashtra", year:"2015", score:"Percentage - 61.60%",link:"https://schools.org.in/mumbai-ii/27230400101/s-k-pantwalawarkar-madhyamik-vidyalaya-kurla-e.html"},
    ]
  return (
    <div id="education">
      <div className="mt-25 sm:pl-8">
        <div>
        <h2 className="text-gray-400 font-semibold tracking-wider pt-5 text-sm pl-8">EDUCATION</h2>
        <h1 className="text-black font-semibold pt-10 text-2xl tracking-wider pl-8">EDUCATION</h1>
        </div>
        <div className="mt-20">
        {education.map((educations,index)=>(
            <Page4Skill key={index} {...educations}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Page4
