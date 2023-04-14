import { Link } from "react-router-dom"

function Login(){
    return (
        <>
        <div className="over active">
            <div className="haye">
                <div className="inhaye">
                <div className="login">
                    <div className="llc bidix_login">
                        <img src="/Images/Home_01.svg" alt="Login_img" />
                    </div>
                    <div className="llc midig_login">
                    <div className="close">
                        <Link to="/">
                            <i className="fa-solid fa-xmark"></i>
                        </Link>
                    </div>
                    <div className="from">
                            <div className="dhinac_l Maclumo_login">
                            <h2>Sign In</h2>
                            <p>Simplify your workflow in minutes.</p>
                            </div>
                            <div className="dhinac_l inputs_login">
                                <input type="tel" placeholder="Lanbaraakaga" autoComplete="off" />
                                <input type="password" placeholder="Passwor-kaaga" autoComplete="off" />
                                <button>
                                    Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                </button>
                                <p className="Bilaa_akoon">Akoon Ma lihid? <Link to="/Signin">Sinup</Link></p>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Login