function Alert({Noc_err , Noc_err1}){
    return (
        <>
        <div className={Noc_err || Noc_err1 ? "over_alert active" : "over_alert"}>
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