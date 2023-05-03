import { useState } from "react";
import { Form , useActionData, useLocation } from "react-router-dom";
import Alert from './Alert';
import AlertLoad from './LoadAlert';
import EVC from "evc-api";
import Video from "./video";
function InfoProject({info}) {
    const Form_data = useActionData()
    const [Pyment_type,setPyment_type] = useState('zaad');
    const Somtel = '65';
    const telesom = "63";
    const toggale_zaad = (e) => {
        setPyment_type("zaad")
    }
    const toggale_edahab = (e) => {
        setPyment_type("edahab")
    }

    const loacation = useLocation()
    console.log(loacation)
    // state
    const [value,setvalue] = useState(0) 
    const valu_tabaruc =   Number(value);
    return (
        <>
        <Alert Noc_err={Form_data && Form_data.err_no} Noc_err1={Form_data && Form_data.err_lacag} Noc_err2={Form_data && Form_data.err_lacag1}/> 
        <AlertLoad Sax={Form_data && Form_data.Sax} />
        <div className="Info">
            <div className="haye">
                <div className="laba_qaybood">
                    <div className="qayb muuqaal">
                        {/* <img src={info && info.Sawir} alt="mashruuc_sawir" /> */}
                        {info ?
                        <Video Muuqaal={info.Muuqaal} />
                        :<></>
                        }
                        <div className="last_donote">
                            <h2> Qofka Ugu Tabaruc Badan</h2>
                            <div className="tabaruc">
                                <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                                </div>
                                <div className="name_amout">
                                    <h2>Maxamad Dayib</h2>
                                    <div className="info_wind">
                                    <p><i className="fa-solid fa-circle-dollar-to-slot"></i> Waxa Uu Ku deeqay $15</p>
                                    <p><i className="fa-solid fa-clock"></i> 3 minit ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tabaruc">
                                <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                                </div>
                                <div className="name_amout">
                                    <h2>Maxamad Dayib</h2>
                                    <div className="info_wind">
                                    <p><i className="fa-solid fa-circle-dollar-to-slot"></i> Waxa Uu Ku deeqay $15</p>
                                    <p><i className="fa-solid fa-clock"></i> 3 minit ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tabaruc">
                                <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                                </div>
                                <div className="name_amout">
                                    <h2>Maxamad Dayib</h2>
                                    <div className="info_wind">
                                    <p><i className="fa-solid fa-circle-dollar-to-slot"></i> Waxa Uu Ku deeqay $15</p>
                                    <p><i className="fa-solid fa-clock"></i> 3 minit ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qayb Pyments">
                        <div className="macluumaad_bidix">
                            <div className="qoraal">
                                <h2>Macluumaadka Masharuuca</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae pariatur reprehenderit neque 
                                    qui laborum, similique eius. Saepe, nulla ullam! Ex, saepe! 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit beatae labore ex quia rerum, cumque ut doloremque autem facere obcaecati. Illo magni pariatur neque quidem ad maiores nemo sequi.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                                </p>
                            </div>
                        </div>
                        <div className="trakoobyo">
                            <div className="tiro">
                                <div className="lahayo">
                                    <div className="icon">
                                        <i className="fa-solid fa-sack-dollar"></i>
                                    </div>
                                    <div className="qoraal">
                                        <p>${info && Number(info.Tabaruc).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="lahayo">
                                    <div className="icon">
                                        <i className="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div className="qoraal">
                                        <p>${info && info.Hadaf}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {info ?
                            <div className="progress">
                            <span style={{width:`${info.Tabaruc / info.Hadaf * 100}%`}}><span>{
                            Math.floor((info.Tabaruc / info.Hadaf * 100)).toFixed(0)
                            }%</span></span>
                            </div>
                            :<></>
                        }

                        <div className="info_fursad">
                            <div className="from_bixin">
                                <Form  method='post' action={`/mashruuc/${info && info._id}`}>
                                    <div className="pyment_types">
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
                                    <input className={(Form_data && Form_data.err_lacag) || (Form_data && Form_data.err_lacag1)  ? "err" : ""} type="text" placeholder="Lacagta" name='Lacagta' onChange={(e) => setvalue(e.target.value)}/>
                                    </div>
                                    <div className="input_feilds">
                                    {Pyment_type === "zaad" ?
                                        <span className='Ll'>{telesom}</span>
                                    : Pyment_type === "edahab" ?
                                            <span className='Ll'>{Somtel}</span>
                                    :
                                        <span className='Ll'>No</span>
                                    }   
                                    <input type="tel" className={Form_data && Form_data.err_no ? "err" : ""}  placeholder="Lanbar" name='Lanbar'/>
                                    <input type='text' name='Id' hidden value={info &&  info._id} />
                                    <input type="number" name='Tabaruc' hidden value={Number(info && info.Tabaruc) + valu_tabaruc} />
                                    <input type='text' hidden value={Pyment_type} name='PymentType' />
                                    </div>
                                    <button className={Form_data && Form_data.Sax ? "bixi loadbtn" : "bixi"} >
                                    <i className="fa-solid fa-paper-plane"></i> Bixi Hada
                                    </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export const donote = async ({request}) => {
    //const {GetAllProjects} = Auth()
    const actions = await request.formData();
    const fildes = {
        Lanbar: actions.get("Lanbar"),
        Lacagta: actions.get('Lacagta'),
        Id: actions.get("Id"),
        Tabaruc: actions.get('Tabaruc'),
        PymentType: actions.get('PymentType')
    }
    const  pattern = /[^0-9]/g;
    const  LacagReg = /[^0-9.]/g;

    //update Tabaruc 
    const Tabaruc = fildes.Tabaruc
    const UpdateProject = async() => {
    const updatenow = await fetch(`http://localhost:8880/Api/Update/${fildes.Id}`, {
        method: 'PATCH',
        body: JSON.stringify({Tabaruc}),
        headers: {
        'Content-Type':'application/json',
        }
    })
    const res =  await updatenow.json()
    }
    const point = fildes.Lacagta.split(".")[1]

    const PymentAction = () => {
            if(fildes.PymentType === "zaad"){
                  // telesom action
                const telesom = () => {
                    EVC({
                    merchantUId: 'M0912269',
                    apiUserId: '1000297',
                    apiKey: 'API-1901083745AHX',
                    customerMobileNumber:  '25263'+fildes.Lanbar,
                    description: 'description.......',
                    amount: String(fildes.Lacagta),
                    autoWithdraw: true, // `true` if auto withdraw else `false`
                    merchantNo: '252402785', // withdraw to ...
                    })
                    .then((data) => {
                        if(data.responseCode !== "200"){
                            console.log(data.responseMsg)
                            // tani sax maaha
                             UpdateProject()
                        } else {
                            UpdateProject()
                        }
                    })
                    .catch((err) => console.log(err.responseCode))
                        
                }
                telesom()
            }
            // somtel action
            if(fildes.PymentType === "edahab"){
                const Somtel = () => {
                    console.log('Somtel pyment')
                    UpdateProject()
                }
                Somtel()
            }
    }
   
    if(fildes.Lanbar.length !== 7 || fildes.Lanbar.match(pattern)){
        return {err_no: "Waa Qalad Lanbarku"}
    } 

    if(fildes.Lacagta < 0.25){
        return {err_lacag: "Lacagtu kama yaraan karto 0.25$"}
    }

    if(fildes.Lacagta.match(LacagReg)){
        return {err_lacag1: "Fadlan si sax lacagta U Qor"}
    }

    if(point){
    if(point.length > 2){
        return {err_lacag1: "Qaabka qoraalka lacagtu waa qalad!"}
    }
    }


    // if(fildes.Lanbar.length === 7 && fildes.Lacagta >= 0.25){

    // }

    console.log(fildes)
    PymentAction()
    return{
        Sax: "Faldan eeg Telefankaaga ...",
    }
    //return redirect("/")
}



export default InfoProject