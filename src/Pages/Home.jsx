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
import Footer from "../Components/Footer"
import Alert from "../Components/Alert"
function Home({video_active, func , LoginFunc}){
    return (
        <>
           
            <Video  video_active={video_active} func={func}/>
            <Nav Login={LoginFunc}/>   
            <Welcome />
            <TiroKoobyo />
            <SlideCompany />
            <Ayad />
            <Projects />
            <About />
            <Counts />
            <Fqa /> 
            <Footer />
             <Alert />      
        </>
    )
}



export default Home