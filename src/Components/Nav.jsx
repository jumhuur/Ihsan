import {Link} from "react-router-dom"
import { Auth } from "../context/Auth"
import MobileNav from "./MobileNav"
import { useState } from "react"
function Nav({Login}){
    const {CrentUser} = Auth()
    const [Activemobile,setActivemobile] = useState(false)
    const activeMobile = () => {
        setActivemobile(!Activemobile)
    }
    return (
        <div className="nav">
            <div className="haye">
                <div className="links">
                    <div className="logo">
                        <Link to="/">
                        <img src="/Images/Logo.png" alt="Logo" />
                        <p>Ixsaan</p>
                        </Link>
                    </div>
                    <div className="link-items computer">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>                      
                            </li>
                            <li>
                                <Link to="" >
                                    Mashruucyo
                                </Link>                           
                            </li>
                            {CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ?
                                <li>
                                <Link to="/addProject">
                                dashboard
                                </Link>
                            </li>
                            : <></>
                            }
                            <li>
                            <span><i className="fa-solid fa-earth-africa"></i> So <i className="fa-solid fa-chevron-down"></i></span>
                            </li>
                        </ul>

                    </div>
                    <div className="action-btn Mobile">
                        <div onClick={activeMobile} className="tips_mobile">
                           <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className="action-btn Computer">
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
                    {Activemobile ? 
                        <MobileNav />
                    :<></>
                    }
                    
                </div>
            </div>

        </div>
    )
}


export default Nav