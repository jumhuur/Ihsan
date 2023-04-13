import About from "../Components/About"
import Ayad from "../Components/Ayad"
import Nav from "../Components/Nav"
import Projects from "../Components/Projects"
import TiroKoobyo from "../Components/Tirakoobyo"
import Welcome from "../Components/Welcom"
import SlideCompany from "../Components/slidecomp"
import Video from "../Components/video"
import Counts from "../Components/Counts"
import Fqa from "../Components/fqa"

function Home({video_active, func}){
    return (
        <>
            <Video  video_active={video_active} func={func}/>
            <Nav />   
            <Welcome />
            <TiroKoobyo />
            <SlideCompany />
            <Ayad />
            <Projects />
            <About />
            <Counts />
            <Fqa /> 
            <footer />      
        </>
    )
}



export default Home