function AlertLoad({Sax}){
    return (
        <>
        <div className={Sax ? "over_alert active" : "over_alert"}>
            <div className="haye">
                <div className="in_haye_alert">
                <div className="alert">
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
                             <h2>{Sax}</h2>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        </>
    )
}
export default AlertLoad