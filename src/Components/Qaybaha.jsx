import {NavLink} from "react-router-dom"

function Qayabaha(){
    return (
        <div className="qaybha">
            <div className="qayb">
                <div className="icon_Q">
                <NavLink to="/">
                <p><i className="fa-solid fa-heart-pulse"></i> Cafimaad</p>
                </NavLink>
               </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Waxbarasho">
                <p><i className="fa-solid fa-graduation-cap"></i> Waxbarasho</p>
                </NavLink>
                </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Cunto">
                <p><i className="fa-solid fa-kaaba"></i> Diini</p>
                </NavLink>
            </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
            <NavLink to="Hoy">
            <p><i className="fa-solid fa-handshake-angle"></i> Taageero</p>
            </NavLink>
            </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Daryeel" >
                <p><i className="fa-solid fa-children"></i> Daryeel</p>
                </NavLink>
                </div>
            </div>
        </div>

    )
}


export  default Qayabaha