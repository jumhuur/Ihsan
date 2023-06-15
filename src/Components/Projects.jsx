import { Outlet } from "react-router-dom";
import Qayabaha from "./Qaybaha";
function Projects() {
  return (
    <>
      <div className="Projects">
        <div className="haye">
          <Qayabaha />
          <div className="prog_one">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
