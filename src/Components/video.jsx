import { Player } from 'video-react';
function Video({Muuqaal}){
    return (
        <div className="h_video">
        <div className="video">
            
            <div className="video_content">
            {Muuqaal && Muuqaal ?
            //<img src={Muuqaal.Muuqaal} alt='ss' />
            <Player
            playsInline
            //poster={Muuqaal.Sawir}
            src={Muuqaal}
            //autoPlay
            />
            :
            <p>please wait</p>
            }

            </div>
        </div>
        </div>
    )
}


export default Video