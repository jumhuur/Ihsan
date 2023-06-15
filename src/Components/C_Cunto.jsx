import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Empaty from "./Empaty";
import { format } from "timeago.js";
import { Auth } from "../context/Auth";
import ProjectSkl from "./Skeletons/ProjectSkeleton";
function CCunto({ func }) {
  const { state } = Auth();
  const [Cunto, setCunto] = useState(null);
  const [loading, setloading] = useState(false);

  // const GetAllData = () => {
  //   setCaafimaad(state.Caafimaad)
  // }

  // useEffect(() => {
  //     GetAllProjects()
  //     console.log(state)
  // },[])

  useEffect(() => {
    setCunto(state.Cunto);
    setloading(true);
  }, [state.Cunto]);
  return (
    <>
      {Cunto && Cunto.length > 0 ? (
        <>
          {Cunto &&
            Cunto.map((card) => (
              <div className="card_mashruuc" key={card._id}>
                <div className="img_or_vid">
                  <img src={card.Sawir} alt="xaalad" />
                  <div className="over_verlow_video">
                    <div className="lacagta">
                      <div className="hadaf_and_asal">
                        <p className="lcg asal">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          {format(card.createdAt)}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc">
                  {/* <h2>Hooyo somaliyeed</h2> */}
                  <p>{card.Macluumaad.substr(0, 65)} ...</p>
                </div>
                <div className="progress">
                  <span
                    style={{ width: `${(card.Tabaruc / card.Hadaf) * 100}%` }}
                  >
                    <span>
                      {Math.floor((card.Tabaruc / card.Hadaf) * 100).toFixed(0)}
                      %
                    </span>
                  </span>
                </div>
                <div className="lacagta">
                  <div className="hadaf_and_asal">
                    <div className="Hadaf">
                      <p className="lcg asal">
                        <i className="fa-solid fa-sack-dollar"></i> $
                        {card.Tabaruc}{" "}
                      </p>
                    </div>
                    <div className="Asal">
                      <p className="lcg asal">
                        <i className="fa-solid fa-circle-check"></i> $
                        {card.Hadaf}
                      </p>
                    </div>
                  </div>
                  <div className="btn_tabaruc">
                    <button className="Daawo" onClick={func}>
                      <Link to={`/Mashruuc/${card._id}`}>
                        <span>
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>{" "}
                          Tabaruc Hada
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
                {/* // halkan  */}
              </div>
            ))}
        </>
      ) : !loading ? (
        <>{ProjectSkl && [1, 2, 3].map((elm) => <ProjectSkl key={elm} />)}</>
      ) : (
        <Empaty />
      )}
    </>
  );
}

export default CCunto;
