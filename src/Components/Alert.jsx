function Alert({Noc_err , Noc_err1, Noc_err2}){
    const active = true;

    // setInterval(() => {
    //     setactive(false)
    //     console.log(active)
    // }, 5000);
    // if(Noc_err || Noc_err1 || Noc_err2){
    //     setTimeout(() => {
    //             setactive(false)
    //             console.log(active)
    //     }, 5000);
    // }

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
                    <div className="load_qoraal">
                        <div className="load Qalad">
                           <i className="fa-solid fa-ban fa-beat"></i>
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