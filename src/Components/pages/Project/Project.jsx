import WorkCollection from "./WorkCollection";
import Cards from "./Cards";
import Certified from "./Certified";
import Checkmates from "../Checkmates/Checkmates";
const Project = () => {
  return (
    <div className="project" id="Project">
      <WorkCollection />
      <Cards />
      <Checkmates />
      <Certified />
    </div>
  );
};

export default Project;
