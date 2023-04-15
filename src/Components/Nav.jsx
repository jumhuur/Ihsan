import {Link} from "react-router-dom"

function Nav({Login}){
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
                            <li>
                                <Link to="">
                                Tabarayaal
                                </Link>
                            </li>
                            <li>
                            <span>Luuqada <i className="fa-solid fa-chevron-down"></i></span>
                            </li>
                        </ul>

                    </div>
                    <div className="action-btn">
                        <button className="nav-btn" onClick={Login}>
                            <Link to="Login" >
                                <span>Gal <i className="fa-solid fa-arrow-right-to-bracket"></i></span>
                            </Link>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Nav