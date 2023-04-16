import { Link, useLocation } from "react-router-dom";

function Alert({Noc_err , Noc_err1, Noc_err2}){
    const active = true;
    const location = useLocation()
    return (
        <>
        <div className={active && (Noc_err || Noc_err1 || Noc_err2 )  ? "over_alert active" : "over_alert"}>
            <div className="haye">
                <div className="in_haye_alert">
                {/* <div className="alert">
                    <div className="load_qoraal">
                        <div className="load">
                            <div class="sk-chase">
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            </div>
                        </div>
                        <div className="qoraal">
                             <h2>Fadlan Telefankaaga eeg ... </h2>
                        </div>
                    </div>
                </div> */}
                <div className="alert">
                    {/* <div className="close">
                        <Link to="/">
                            <i className="fa-solid fa-xmark"></i>
                        </Link>
                    </div> */}
                    <div className="load_qoraal">
                        <div className="load Qalad">
                           {/* <i className="fa-solid fa-ban fa-beat"></i> */}
                           <i className="fa-solid fa-triangle-exclamation fa-shake"></i>
                           {/* <img src="/Images/warning.png" alt="qalad" /> */}
                        </div>
                        {Noc_err ? 
                        <div className="qoraal">
                             <h2 className="qalad">{Noc_err}! </h2>
                        </div>
                        :Noc_err1 ? 
                        <div className="qoraal">
                             <h2 className="qalad">{Noc_err1}! </h2>
                        </div>
                        :Noc_err2 ? 
                        <div className="qoraal">
                             <h2 className="qalad">{Noc_err2}! </h2>
                        </div>
                        :<></>

                    }

                    <button><Link to={location.pathname}>Ok</Link></button>

                    </div>
                </div>
                {/* <div className="alert">
                    <div className="load_qoraal">
                        <div className="load Sax">
                           <i className="fa-solid fa-circle-check fa-beat"></i>
                        </div>
                        <div className="qoraal">
                             <h2 className="Sax">Waxaad ku Tabarucday 22$ </h2>
                        </div>
                    </div>
                </div> */}
                </div>

            </div>
        </div>
        </>
    )
}
export default Alert