import Page1 from "../HomePageComponent/Page1"
import Page2 from "../HomePageComponent/Page2"
import Page3 from "../HomePageComponent/Page3"
import Page4 from "../HomePageComponent/Page4"
import Page5 from "../HomePageComponent/Page5"
import Page6 from "../HomePageComponent/Page6"
import Page7 from "../HomePageComponent/Page7"

const HomePage = () => {
  return (
    <div className="sm:w-[60%] sm:ml-[32.5%]">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
    </div>
  )
}

export default HomePage
