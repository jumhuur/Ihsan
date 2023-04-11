import { Outlet } from "react-router-dom"
import Qayabaha from "./Qaybaha"
function Projects({f_active}){
    return (
        <>
        <div className="Projects">
            <div className="haye">
            <Qayabaha />
            {/* <h2 className="pro_title">Mashruucyo</h2> */}
                <div className="prog_one">
                    {/* <Card f_active={f_active}/> */}
                    <Outlet />
                </div>
            </div>
        </div>
        
        </>
    )
}


export default Projects