import { Link } from "react-router-dom"
import { Auth } from "../context/Auth"

function MobileNav({Login}) {
        const {CrentUser} = Auth()
    return (
        <>
        <div className="link-items Mobile">
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
                    mobile
                    </Link>
                </li>
                : <></>
                }
                <li>
                <span><i className="fa-solid fa-earth-africa"></i> So <i className="fa-solid fa-chevron-down"></i></span>
                </li>
            </ul>

        </div>
        </>
    )
}


export default MobileNav