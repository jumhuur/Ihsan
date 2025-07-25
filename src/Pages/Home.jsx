import About from "../Components/About";
import Ayad from "../Components/Ayad";
import Nav from "../Components/Nav";
import Projects from "../Components/Projects";
import TiroKoobyo from "../Components/Tirakoobyo";
import Welcome from "../Components/Welcom";
import SlideCompany from "../Components/slidecomp";
import Counts from "../Components/Counts";
import Fqa from "../Components/fqa";
import Footer from "../Components/Footer";
import MyTabaruc from "../Components/MyTabaruc";
function Home({ LoginFunc }) {
  return (
    <>
      {/* <Video  video_active={video_active} func={func}/> */}
      {/* <MyTabaruc /> */}
      <Nav Login={LoginFunc} />
      <Welcome />
      <TiroKoobyo />
      <SlideCompany />
      <Ayad />
      <Projects />
      <About />
      <Counts />
      <Fqa />
      <Footer />
    </>
  );
}

export default Home;
