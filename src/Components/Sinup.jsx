import {Link, redirect } from "react-router-dom"
import { UseRegister } from "../Hooks/Register";
import { useState } from "react";
function Sinup() {
    const [inputes,setinputes]= useState({
        Magac: "",
        Lanbar:"",
        Password: ""
    })

    const onchange_inputes = (e) => {
        setinputes((prev) => ({...prev, [e.target.name]:e.target.value }))
    }

    const { register, Looding, Error } = UseRegister()
    const RegisterAction = (e) => {
        e.preventDefault()
        register(inputes.Magac, inputes.Lanbar, inputes.Password)
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
                                <form className="from">
                                    <div className="dhinac_l Maclumo_login">
                                        <h2>Samayso Akoon</h2>
                                        <p>Ku samayso akoon daqiiqad Gudaheed.</p>
                                    </div>
                                    <div className="dhinac_l inputs_login">
                                        <input onChange={onchange_inputes} type={"text"} placeholder="Magacaaga" autoComplete="off" name="Magac" />
                                        <input onChange={onchange_inputes} type={"tel"}placeholder="Lanbaraakaga" autoComplete="off" name="Lanbar" />
                                        <input onChange={onchange_inputes} type={"password"} placeholder="Passwor-kaaga" autoComplete="off" name="Password" />
                                        {!Looding ?
                                        <button onClick={RegisterAction}>
                                            <i className="fa-solid fa-user-plus"></i> Samayso 
                                        </button>
                                        :
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

                                        }

                                        <p className="Bilaa_akoon">Akoon Ma leedahay? <Link to="/Login">Gal Akoon</Link></p>
                                        {Error ?
                                        <p className="Error"><i className="fa-solid fa-circle-exclamation"></i> {Error}</p>
                                        :<></>
                                        }


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// export const Register = async ({ request }) => {
//     const my_data = await request.formData();
//     const inputes = {
//         Magac: my_data.get("Magac"),
//         Lanbar: my_data.get("Lanbar"),
//         Password: my_data.get("Password")
//     }


//     if (inputes.Lanbar.length > 7 || inputes.Lanbar.length < 7) {
//         return { Err: "Waa Qalad Lanbarkani" }
//     }

//     if (inputes.Magac.length > 15) {
//         return { Err1: "Fadlan Magaca Soo Koob" }
//     }

//     if(inputes.Lanbar === 7 &&  inputes.Magac.length < 15){
//         return {
//             Magac: inputes.Magac,
//             Lanbar: inputes.Lanbar,
//             Password: inputes.Password
//         }
//     }
//     return  null //redirect("/")
// }



export default Sinup