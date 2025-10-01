import WorkCollection from "./WorkCollection";
import Cards from "./Cards";
import Certified from "./Certified";
import Checkmates from "../Checkmates/Checkmates";
import Braveresult from "./Braveresult";
const Project = () => {
  return (
    <div className="project" id="Project">
      <WorkCollection />

      <Cards />
      <Braveresult />

      <Checkmates />
      <Certified />
    </div>
  );
};

export default Project;
