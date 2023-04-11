import { Player } from 'video-react';

function Video({video_active,func}){
    console.log(video_active)
    return (
        <div className={!video_active ? "video_overvallow" : "video_overvallow active"}>
            <div className="haye">
                <div className="h_video">
                <div className="video">
                    <div className="video_content">
                    <div className="close_video" onClick={func}>
                    <i className="fa-solid fa-xmark"></i>
                    </div>
                    {video_active ? 
                    <Player
                    playsInline
                    // poster="/Images/Web.png"
                    src="/videos/Video.mp4"
                    autoPlay
                    />
                    :
                    <></>
                    }

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Video