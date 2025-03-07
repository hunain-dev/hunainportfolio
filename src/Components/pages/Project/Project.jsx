import WorkCollection from "./WorkCollection";
import Cards from "./Cards";
import Certified from "./Certified";
import Faqs from "./Faqs";
import Checkmates from "../Checkmates/Checkmates";
const Project = () => {
  return (
    <div className="project" id="Project">
      <WorkCollection />
      <Cards />
      <Checkmates />
      <Certified />
      <Faqs />
    </div>
  );
};

export default Project;
