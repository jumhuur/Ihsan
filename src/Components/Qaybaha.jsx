import {NavLink} from "react-router-dom"

function Qayabaha(){
    return (
        <div className="qaybha">
            <div className="qayb">
                <div className="icon_Q">
                <NavLink to="/">
                <p><i className="fa-solid fa-heart-pulse"></i> Cafimaad(03)</p>
                </NavLink>
               </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Waxbarasho">
                <p><i className="fa-solid fa-graduation-cap"></i> Waxbarasho(03)</p>
                </NavLink>
                </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Cunto">
                <p><i className="fa-solid fa-utensils"></i> Cunto(03)</p>
                </NavLink>
            </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
            <NavLink to="Hoy">
            <p><i className="fa-solid fa-house"></i> Hoy(03)</p>
            </NavLink>
            </div>
            </div>
            <div className="qayb">
            <div className="icon_Q">
                <NavLink to="Daryeel" >
                <p><i className="fa-solid fa-parachute-box"></i> Daryeel(03)</p>
                </NavLink>
                </div>
            </div>
        </div>

    )
}


export  default Qayabaha