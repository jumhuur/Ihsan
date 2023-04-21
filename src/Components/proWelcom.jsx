import { format} from 'timeago.js'
function ProWelcome({info}) {
    return (
        <div className="well">
            <div className="haye">
                <div className="macluumaad">
                    <h2>Aabo Waayeela Oo Baahan  </h2>
                    <div className="ashyaa">
                        <div className="qayb">
                            <p className="lcg asal"><i className="fa-solid fa-calendar-days"></i>  {info && format(info.createdAt)}</p>
                        </div>
                        <div className="qayb">
                            <p className="lcg asal"><i className="fa-solid fa-layer-group"></i> {info && info.Qayb}</p>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}


export default ProWelcome