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
                    <p className="lcg asal"><i className="fa-solid fa-sack-dollar"></i> ${card.Tabaruc} </p>
                </div>
                <div className='Asal'>
                <p className="lcg asal"><i className="fa-solid fa-circle-check"></i> ${card.Hadaf}</p>
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

export default Card


