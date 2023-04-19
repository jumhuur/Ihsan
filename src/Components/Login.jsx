import { Link, redirect } from "react-router-dom"
import { UseLogin } from "../Hooks/Login"
import { useState } from "react"

function Login(){
        const [inputes,setinputes]= useState({
        Lanbar:"",
        Password: ""
    })

    const onchange_inputes = (e) => {
        setinputes((prev) => ({...prev, [e.target.name]:e.target.value }))
    }

    const { Login, Looding, Error } = UseLogin()
    // console.log(data && data.Err)
    // console.log(data && data.Err1)
    const LoginAction = (e) => {
        e.preventDefault()
        Login(inputes.Lanbar, inputes.Password)
        redirect("/")
    }
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
                            <h2>Gal Akoon</h2>
                            <p>Soo dhawaaw mar kale .</p>
                            </div>
                            <div className="dhinac_l inputs_login">
                                <input onChange={onchange_inputes} type={"tel"} placeholder="Lanbaraakaga" autoComplete="off" name="Lanbar" />
                                <input onChange={onchange_inputes} type={"password"} placeholder="Passwor-kaaga" autoComplete="off" name="Password" />
                                {Looding ?
                                <button>
                                <div class="sk-circle">
                                    <div class="sk-circle1 sk-child"></div>
                                    <div class="sk-circle2 sk-child"></div>
                                    <div class="sk-circle3 sk-child"></div>
                                    <div class="sk-circle4 sk-child"></div>
                                    <div class="sk-circle5 sk-child"></div>
                                    <div class="sk-circle6 sk-child"></div>
                                    <div class="sk-circle7 sk-child"></div>
                                    <div class="sk-circle8 sk-child"></div>
                                    <div class="sk-circle9 sk-child"></div>
                                    <div class="sk-circle10 sk-child"></div>
                                    <div class="sk-circle11 sk-child"></div>
                                    <div class="sk-circle12 sk-child"></div>
                                </div>
                                </button>
                                :
                                <button onClick={LoginAction}>
                                    Gal Akoon <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                </button>
                                }

                                <p className="Bilaa_akoon">Akoon Ma lihid? <Link to="/Signin">Sinup</Link></p>
                                {Error ? 
                                <p className="Error"><i className="fa-solid fa-circle-exclamation"></i> {Error}</p>
                                :<></>
                                }
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