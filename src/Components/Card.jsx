import {useState } from 'react';
import { Form, Link,useActionData,  } from 'react-router-dom';
import Alert from './Alert';
import AlertLoad from './LoadAlert';
import EVC from "evc-api";import { Auth } from '../context/Auth';
import { useEffect } from 'react';
import Empaty from './Empaty';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format} from 'timeago.js';
function Card({func}){
    const {state,GetAllProjects} = Auth();
    const [Caafimaad,setCaafimaad] = useState(null)
    const [loading,setloading]= useState(false)
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
    // state
    const [value,setvalue] = useState(0) 
    const valu_tabaruc =   Number(value);

    // const GetAllData = () => {
    //   setCaafimaad(state.Caafimaad)
    // }

    // useEffect(() => {
    //     GetAllProjects()
    //     console.log(state)
    // },[])

    useEffect(() => {
        setCaafimaad(state.Caafimaad)
        setloading(true)
    },[state.Caafimaad])
    return (
        <>
        <Alert Noc_err={Form_data && Form_data.err_no} Noc_err1={Form_data && Form_data.err_lacag} Noc_err2={Form_data && Form_data.err_lacag1}/> 
        <AlertLoad Sax={Form_data && Form_data.Sax} />
        {(Caafimaad && Caafimaad.length > 0) ?
        <>
            {Caafimaad && Caafimaad.map((card) => (
            <div className="card_mashruuc" key={card}>
            <div className="img_or_vid">
                <img src={card.Sawir} alt="xaalad" />
                <div className="over_verlow_video">
                <div className="lacagta">
                    <div className="hadaf_and_asal">
                        <p className="lcg asal"><i className="fa-solid fa-calendar-days"></i> {format(card.createdAt)} </p>
                    </div>
                </div>

                </div>
            </div>
            <div className="desc">
                {/* <h2>Hooyo somaliyeed</h2> */}
                <p>
                    Waa qof waayeela oo Baahan
                    waxana haya xanuun aad u daran oo maalin ...
                </p>
            </div>
            <div className="progress">
                <span style={{width:`${card.Tabaruc / card.Hadaf * 100}%`}}><span>{
                Math.floor((card.Tabaruc / card.Hadaf * 100)).toFixed(0)
                }%</span></span>
            </div>
            <div className="lacagta">
            <div className="hadaf_and_asal">
                <div className='Hadaf'>
                    <p className="lcg asal"><i className="fa-solid fa-sack-dollar"></i> {card.Tabaruc} $</p>
                </div>
                <div className='Asal'>
                <p className="lcg asal"><i className="fa-solid fa-circle-check"></i> {card.Hadaf} $</p>
                </div>
                
                
            </div>
            <div className="btn_tabaruc">
                    <button className='Daawo' onClick={func}>
                    <Link to={`Mashruuc/${card._id}`}>
                    <span><i className="fa-solid fa-circle-dollar-to-slot"></i> Tabaruc Hada</span>
                      </Link>
            </button>
            </div>

            </div>
            {/* // halkan  */}
            </div>
            ))}
        </>
        :(Caafimaad && !Caafimaad) || (Caafimaad && Caafimaad === null) ?
        <p>loading ...</p>
        :
        <Empaty />
        }
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
    //GetAllProjects()
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

export default Card


