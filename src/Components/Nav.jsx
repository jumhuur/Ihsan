import {Link} from "react-router-dom"
import { Auth } from "../context/Auth"
function Nav({Login}){
    const {CrentUser} = Auth()
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
                    <div className="link-items">
                        <ul>
                            <li>
                                <Link to="">
                                    Home
                                </Link>                      
                            </li>
                            <li>
                                <Link to="" >
                                    Mashruucyo
                                </Link>                           
                            </li>
                            {CrentUser && CrentUser.Id === "643d37ce7bf402dde24ec766" ?
                                <li>
                                <Link to="">
                                Gali Mashruuc
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
                        <div className="tips_mobile">
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
                                <span>Gal <i className="fa-solid fa-arrow-right-to-bracket"></i></span>
                            </Link>
                        </button>
                        }


                    </div>
                </div>
            </div>

        </div>
    )
}


export default Nav