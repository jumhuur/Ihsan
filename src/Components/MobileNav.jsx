import { Link } from "react-router-dom"
import { Auth } from "../context/Auth"

function MobileNav({Login}) {
        const {CrentUser} = Auth()
    return (
        <>
        <div className="Mobile">
            <ul>
                <li>
                    <Link to="/">
                        <span><i className="fa-solid fa-house"></i> Home</span>
                    </Link>                      
                </li>
                <li>
                    <Link to="" >
                        <span><i className="fa-solid fa-layer-group"></i> Mashruucyo</span>
                    </Link>                           
                </li>
                {CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ?
                <li>
                <Link to="/addProject">
                <span><i className="fa-solid fa-gauge-high"></i> dashboard</span>
                </Link>
                </li>
                : <></>
                }
                <li>
                <Link to="">
                <span><i className="fa-solid fa-earth-africa"></i> So <i className="fa-solid fa-chevron-down"></i></span>
                </Link>
                </li>
                <li>
                <div className="action-btn">
                {CrentUser ?
                <button className="nav-btn" onClick={Login}>
                        <span>{CrentUser.Magac}</span>
                </button>
                :
                <button className="nav-btn" onClick={Login}>
                    <Link to={"/Login"} >
                        <span>Gal Akoon <i className="fa-solid fa-arrow-right-to-bracket"></i></span>
                    </Link>
                </button>
                }
                </div>
                </li>
            </ul>

        </div>
        </>
    )
}


export default MobileNav