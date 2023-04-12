import { useState } from 'react';
function CDaryeel({func}){
    const Heer  = 25;
    const data = false;
    const [Pyment_type,setPyment_type] = useState('zaad');
    const toggale_zaad = (e) => {
        // true = telesom
        // false = somtel 
        setPyment_type("zaad")
        console.log(Pyment_type)

    }
    const toggale_edahab = (e) => {
        // true = telesom
        // false = somtel 
        setPyment_type("edahab")
        console.log(Pyment_type)

    }
    console.log(Pyment_type)
    return (
        <>
        {!data && [1,2,3].map((card) => (
            <div className="card_mashruuc" key={card}>
            <div className="img_or_vid">
                <img src="/Images/daryeel.JPG" alt="xaalad" />
                <div className="over_verlow_video">
                    <button className='Daawo' onClick={func}>
                    <i className="fa-solid fa-play"></i> Muuqaal
                    </button>
                    <div className="lacagta">
                    <div className="hadaf_and_asal">
                        <p className="lcg asal"><i className="fa-solid fa-circle-check"></i> 22578 $</p>
                    </div>
                </div>
    
                </div>
            </div>
            {/* <div className="desc">
                <p>
                    Waa qof waayeela oo Baahan
                </p>
            </div> */}
            <div className="progress">
                <span style={{width:`${Heer}%`}}><span>{Heer}%</span></span>
            </div>
            <div className="info_fursad">
    
                <div className="from_bixin">
                    <form action="">
                        <div className="pyment_types">
                            {/* <div className="Pay Zaad">
                                <input onClick={(e) => (
                                    setPyment_type(e.target.value)
                                )} id="Zaad" type="radio" value="zaad" name="Payment" checked/>
                                <label htmlFor="Zaad"><i className="telesom fa-solid fa-sim-card"></i> Zaad</label>
                            </div>
                            <div className="Pay E-dahab">
                                <input onClick={(e) =>  setPyment_type(e.target.value)} id="e-dahab" type="radio" value="e-dahab" name="Payment"/>
                                <label htmlFor="e-dahab"><i className="somtel fa-solid fa-sim-card"></i> e-dahab</label>
                            </div> */}
                            <div className="raber_switcher">
                                {/* <span>Zaad</span> */}
                                <div className="input" >
                                <label onClick={toggale_zaad} className={Pyment_type === "zaad" ? 'zaad active' : "zaad"}><span><i className="fa-solid fa-circle-check"></i> Zaad</span></label>
                                <label onClick={toggale_edahab} className={Pyment_type === "edahab" ? 'edahab active' : "edahab"}><span><i className="fa-solid fa-circle-check"></i> edahab</span></label>
                                <input type="checkbox"  name='payment'/>
                                </div>
                                {/* <span>Edahab</span> */}
                            </div>
                        </div>
                        <div className="donter_info">
                        {/* <input type="text" placeholder="Magaca" /> */}
                        <div className="input_feilds">
                        <span className='Ll'><i className="fa-solid fa-sack-dollar"></i></span>
                        <input type="text" placeholder="Lacagta" />
                        </div>
                        <div className="input_feilds">
                         {Pyment_type === "zaad" ?
                            <span className='Ll'>63</span>
                          : Pyment_type === "edahab" ?
                                <span className='Ll'>65</span>
                          :
                            <span className='Ll'>No</span>
                        }   
                        <input type="text"  placeholder="Lanbarka"/>
                        </div>
                        <button className="bixi">
                        <i className="fa-solid fa-paper-plane"></i> Bixi Hada
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            ))}
            </>
    )
}


export default CDaryeel