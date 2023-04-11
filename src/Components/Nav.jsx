import {Link} from "react-router-dom"

function Nav(){
    return (
        <div className="nav">
            <div className="haye">
                <div className="links">
                    <div className="logo">
                        <Link to="/">
                        <p>Ehsan <span><i className="fa-solid fa-circle-dollar-to-slot"></i></span></p>
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
                                    Projects
                                </Link>                           
                            </li>
                            <li>
                                <Link to="">
                                    Dontors
                                </Link>
                            </li>
                            <li>
                            <span>Langugae <i className="fa-solid fa-chevron-down"></i></span>
                            </li>
                        </ul>

                    </div>
                    <div className="action-btn">
                        <button className="nav-btn">
                            Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Nav