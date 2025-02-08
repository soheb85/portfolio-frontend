/* eslint-disable react/prop-types */

const Page2Skill = ({text,border,textColor,Icons}) => {
  return (
    <div className={`border-b-4 ${border} h-[200px] w-[200px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl`}>
        <div>
      <h1 className={`text-4xl ${textColor} flex relative top-10 left-10`}>{Icons && <Icons/>}</h1>
      <h1 className="text-xl  relative top-18 left-12">{text}</h1>
      </div>
    </div>
  )
}

export default Page2Skill
