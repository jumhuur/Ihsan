import { Link } from "react-router-dom"

function Welcome(){
    return (
        <div className="welcome">
            <div className="haye">
            <div className="labaqaybood">
            <div className="qayb qorall">
                <h2>Welcome to <span>Ehsan</span> Develop anything.</h2>
                <p>Build a beautiful, modern website with flexible Bootstrap components built from scratch.

            </p>
            <div className="btn-welc">
                <button className="samayso">
                    <Link to="Signin">
                        <span>Get Started <i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                </button>
                <button className="Xaqiijin">
                <i className="fa-solid fa-circle-check"></i> Xaqiiji Tabaruc
                </button>
            </div>
            </div>
            <div className="qayb sawir">
                <img src="/Images/Home_01.svg" alt="homepage_ills" />
            </div>
            </div>
            </div>

        </div>
    )
}


export default Welcome