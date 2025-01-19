import WorkCollection from "./WorkCollection"
import Cards from "./Cards"
import Certified from "./Certified"
import Faqs from "./Faqs"
const Project = () => {
  return (
    <div className="project" id="Project">
      <WorkCollection/>
      <Cards/>
      <Certified/>
      <Faqs/>
    </div>
  )
}

export default Project
