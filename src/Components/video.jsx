import { Player } from 'video-react';
import { UseGetOnePro } from '../Hooks/GetonePro';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Auth } from '../context/Auth';
import { useState } from 'react';

function Video({video_active,func}){
    const [Error, setError] = useState(null);
    const [Looding, setLooding] = useState(false);
    const [onePro,setonePro] = useState(null)
    //const {} = Auth();
    const {Id} = useParams()
    const GetOne = async() => {
        const OneProject = await fetch(`http://localhost:8880/Api/Mashruuc/${Id}`)
        const res = await  OneProject.json()
        if(!OneProject.ok){
            setError(res.Err)
            console.log("Not Found")
            setLooding(false)
        }

        if(OneProject.ok){
            setError(false)
            setonePro(res)
            setLooding(true)
        }
    }
    console.log(onePro)

    useEffect(() => {
        GetOne()
    },[])
    console.log(video_active)
    return (
        <div className="video_overvallow active">
            <div className="haye">
                <div className="h_video">
                <div className="video">
                    
                    <div className="video_content">
                    <Link to={"/"} >
                    <div className="close_video" onClick={func}>
                    <i className="fa-solid fa-xmark"></i>
                    </div> 
                    </Link>
                    {onePro && onePro ?
                    //<img src={onePro.Muuqaal} alt='ss' />
                    <Player
                    playsInline
                    //poster={onePro.Sawir}
                    src={onePro.Muuqaal}
                    autoPlay
                    />
                    :
                    <p>please wait</p>
                    }

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Video