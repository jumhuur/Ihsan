import { useState } from 'react';
import data from "../Data.json";
import { Form, redirect, useActionData } from 'react-router-dom';
import Alert from './Alert';
import AlertLoad from './LoadAlert';
function Card({func}){
    const Projects = data;
    const Form_data = useActionData()
    const [Pyment_type,setPyment_type] = useState('zaad');
    const toggale_zaad = (e) => {
        setPyment_type("zaad")
    }
    const toggale_edahab = (e) => {
        setPyment_type("edahab")
    }
    // state
    const [value,setvalue] = useState(0) 
    const valu_tabaruc =   Number(value);

    const PymentAction = (e) => {

        // telesom action
        if(Pyment_type === "zaad"){
            const telesom = () => {
                console.log('telesom pyment')
            }

            telesom()
        }

        // somtel action
         if(Pyment_type === "edahab"){
            const Somtel = () => {
                console.log('Somtel pyment')
            }
            Somtel()
         }
    }
    return (
        <>

        <Alert Noc_err={Form_data && Form_data.err_no} Noc_err1={Form_data && Form_data.err_lacag} /> 
        <AlertLoad Sax={Form_data && Form_data.Sax} />
        {Projects && Projects.map((card) => (
            <div className="card_mashruuc" key={card}>
            <div className="img_or_vid">
                <img src={card.Muuqaal} alt="xaalad" />
                <div className="over_verlow_video">
                    <button className='Daawo' onClick={func}>
                    <i className="fa-solid fa-play"></i> Muuqaal
                    </button>
                    <div className="lacagta">
                    <div className="hadaf_and_asal">
                        <p className="lcg asal"><i className="fa-solid fa-circle-check"></i> {card.Tabaruc} $</p>
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
                <span style={{width:`${card.Tabaruc / card.Hadaf * 100}%`}}><span>{
                Math.floor((card.Tabaruc / card.Hadaf * 100)).toFixed(0)
                }%</span></span>
            </div>
            <div className="info_fursad">
                <div className="from_bixin">
                    <Form  method='post' action="/">
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
                                <input type="checkbox"  name='payment' value={Pyment_type}/>
                                </div>
                                {/* <span>Edahab</span> */}
                            </div>
                        </div>
                        <div className="donter_info">
                        <div className="input_feilds">
                        <span className='Ll'><i className="fa-solid fa-sack-dollar"></i></span>
                        <input className={Form_data && Form_data.err_lacag ? "err" : ""} type="text" placeholder="Lacagta" name='Lacagta' onChange={(e) => setvalue(e.target.value)}/>
                        </div>
                        <div className="input_feilds">
                         {Pyment_type === "zaad" ?
                            <span className='Ll'>63</span>
                          : Pyment_type === "edahab" ?
                                <span className='Ll'>65</span>
                          :
                            <span className='Ll'>No</span>
                        }   
                        <input type="tel" className={Form_data && Form_data.err_no ? "err" : ""}  placeholder="Lanbarka" name='Lanbarka'/>
                        <input type='text' name='Id' hidden value={card.id} />
                        <input  type="number" name='Tabaruc' hidden value={Number(card.Tabaruc) + valu_tabaruc} />

                        </div>
                        <button onClick={PymentAction} className={Form_data && Form_data.Sax ? "bixi loadbtn" : "bixi"} >
                        <i className="fa-solid fa-paper-plane"></i> Bixi 
                        </button>
                        </div>
                    </Form>
                </div>
            </div>
            </div>
            ))}
            </>
    )
}


export const donote = async ({request}) => {
    const actions = await request.formData();
    const fildes = {
        Lanbarka: actions.get("Lanbarka"),
        Lacagta: actions.get('Lacagta'),
        Id: actions.get("Id"),
        Tabaruc: actions.get('Tabaruc')
    }
   
    if(fildes.Lanbarka.length !== 7){
        return {err_no: "Waa Qalad Lanbarku"}
    } 

    if(fildes.Lacagta < 0.25){
        return {err_lacag: "Lacagtu kama yaraan karto 0.25$"}
    }

    if(fildes.Lanbarka.length === 7 && fildes.Lacagta >= 0.25 ){
        console.log(fildes)
        return{
            Sax: "Faldan eeg Telefankaag ...",
            Lacag: fildes.Lacagta
        }
    }
    return redirect("/")
}

export default Card


