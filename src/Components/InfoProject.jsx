import { useEffect, useState } from "react";
import { Form, Link, useActionData, useParams } from "react-router-dom";
import Alert from "./Alert";
import AlertLoad from "./LoadAlert";
import EVC from "evc-api";
import Video from "./video";
import { Auth } from "../context/Auth";
import { format } from "timeago.js";
import { tab } from "@testing-library/user-event/dist/tab";
import ProInfoSkl from "./Skeletons/ProSkeleton";
import EmpatyTabaruc from "./EmptyTabruc";
function InfoProject() {
  const { Id } = useParams();
  const Form_data = useActionData();
  const { CrentUser } = Auth();
  const UserLanbar = CrentUser && CrentUser.Lanbar;
  const Tabaruce = CrentUser ? CrentUser.Id : "Ixsan2023";
  const Name = CrentUser ? CrentUser.Magac : "Deeq Bixiye";
  const [Pyment_type, setPyment_type] = useState("zaad");
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  const [wait, setwait] = useState(false);
  const [info, setinfo] = useState();
  const [total, settotal] = useState(0);
  const [tabaruc, settabaruc] = useState(null);
  const [msg, setmsg] = useState("");
  const [img, setimg] = useState("");
  const [cln, setcln] = useState("");
  //const [lacag,setlacag] = useState(0)
  // radiuse
  const [fildes, setfildes] = useState({
    Lanbar: UserLanbar,
    Lacagta: "",
  });

  const [fildesTabaruc, setfildesTabaruc] = useState({
    Name: Name,
    Lanbar: fildes.Lanbar,
    Lacagta: Number(fildes.Lacagta),
    Id: Id,
    Tabaruce: Tabaruce,
    PymentType: Pyment_type,
  });
  const Tabaruc = Number(fildes.Lacagta) + Number(info && info.Tabaruc);

  const Somtel = "65";
  const telesom = "63";
  const pattern = /[^0-9]/g;
  const LacagReg = /[^0-9.]/g;

  // on change inputes
  const OnChangeInputes = (e) => {
    setfildes((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    setfildesTabaruc((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    // console.log(fildes)
    // console.log(fildesTabaruc)
  };

  // get  total

  const GetTotal = async () => {
    const Total = await fetch(`http://localhost:8880/Api/GetTotal/${Id}`);
    const res = await Total.json();
    if (Total.ok) {
      settotal(res[0].Lacagta);
    }
  };

  const GetOne = async () => {
    const OneProject = await fetch(`http://localhost:8880/Api/Mashruuc/${Id}`);
    const Tabaruc = await fetch(`http://localhost:8880/Api/GetTabarucyo/${Id}`);
    const res = await OneProject.json();
    const res1 = await Tabaruc.json();
    if (!OneProject.ok) {
      console.log("Not Found");
    }

    if (OneProject.ok) {
      setinfo(res);
    }

    if (!Tabaruc.ok) {
      console.log("Not Found");
    }
    if (Tabaruc.ok) {
      settabaruc(res1);
    }
  };

  const UpdateAction = async () => {
    const updatenow = await fetch(`http://localhost:8880/Api/Update/${Id}`, {
      method: "PATCH",
      body: JSON.stringify({ Tabaruc }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await updatenow.json();
    if (updatenow.ok) {
      //setwait(true)
      //setwait(false)
      GetOne();
    }
  };

  const AddTabaruc = async () => {
    const AddTabaruc = await fetch("http://localhost:8880/Api/addTabaruc", {
      method: "POST",
      body: JSON.stringify(fildesTabaruc),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await AddTabaruc.json();
    if (!AddTabaruc.ok) {
      setLooding(true);
      setError(res.Err);
      setmsg(res.Err);
      console.log(res.Err);
    }

    if (AddTabaruc.ok) {
      UpdateAction();
    }
  };

  const PymentAction = () => {
    setmsg("Fadlan Telefankaaga Eeg");
    setwait(true);
    // const point = fildes.Lacagta.split(".")[1]

    // if(fildes.Lanbar.length !== 7 || fildes.Lanbar.match(pattern)){
    //     console.log("Waa Qalad Lanbarku")
    //     setmsg("Waa Qalad Lanbarku")
    // }

    // if(fildes.Lacagta < 0.25){
    //      console.log("Lacagtu kama yaraan karto 0.25$")
    // }

    // if(fildes.Lacagta.match(LacagReg)){
    //      console.log("Fadlan si sax lacagta U Qor")
    // }

    // if(point){
    // if(point.length > 2){
    //     console.log("Qaabka qoraalka lacagtu waa qalad!")
    // }
    // }
    if (Pyment_type === "zaad") {
      // telesom action
      const telesom = () => {
        EVC({
          merchantUId: "M0912269",
          apiUserId: "1000297",
          apiKey: "API-1901083745AHX",
          customerMobileNumber: "25263" + fildes.Lanbar,
          description: "description.......",
          amount: String(fildes.Lacagta),
          autoWithdraw: true, // `true` if auto withdraw else `false`
          merchantNo: "252402785", // withdraw to ...
        })
          .then((data) => {
            if (data.responseCode !== "200") {
              // tani sax maaha
              console.log(data.responseCode);
              //Qaybta saxda ayaa leh  Lakiin tijaabo ahaan ayaan halkan ugu qoray
              //AddTabaruc()
              // setmsg(`Mahadsanid ${fildes.Lacagta} $ Ayaad Bixisay`)
              // setimg("fa-solid fa-circle-check")
              // setcln('Sax')
              // setwait(0)

              //Qaybta qaladka ah
              setmsg(
                "Lanbarka , Lacagta Ama Pinka Mid Ayaad Qaladan Fadlan sax"
              );
              setimg("fa-solid fa-triangle-exclamation fa-shake");
              setcln("Qalad");
              setwait(0);
            } else {
              AddTabaruc();
              setmsg(`Mahadsanid ${fildes.Lacagta} $ Ayaad Bixisay`);
              setimg("fa-solid fa-circle-check");
              setcln("Sax");
              setwait(0);
            }
          })
          .catch((err) => console.log(err.responseCode));
      };
      telesom();
    }
    // somtel action
    if (Pyment_type === "edahab") {
      const Somtel = () => {
        console.log("Somtel pyment");
        //AddTabaruc()
      };
      Somtel();
    }
  };

  const toggale_zaad = (e) => {
    setPyment_type("zaad");
  };
  const toggale_edahab = (e) => {
    setPyment_type("edahab");
  };

  useEffect(() => {
    GetOne();
    GetTotal();
  }, []);

  return (
    <>
      {wait ? <AlertLoad Sax={msg} /> : <></>}

      {wait === 0 ? <Alert msg={msg} img={img} cln={cln} /> : <></>}

      <>
        {info ? (
          <div className="Info">
            <div className="haye">
              <div className="laba_qaybood">
                <div className="qayb muuqaal">
                  {/* <img src={info && info.Sawir} alt="mashruuc_sawir" /> */}
                  {info ? <Video Muuqaal={info.Muuqaal} /> : <></>}
                  <div className="macluumaad_bidix">
                    <div className="qoraal">
                      <h2>Macluumaadka Masharuuca</h2>
                      <p>{info.Macluumaad}</p>
                    </div>
                  </div>
                  <div className="trakoobyo">
                    <div className="tiro">
                      <div className="lahayo">
                        <div className="icon">
                          <i className="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="qoraal">
                          <p>${info && Number(info.Tabaruc).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="lahayo">
                        <div className="icon">
                          <i className="fa-solid fa-circle-check"></i>
                        </div>
                        <div className="qoraal">
                          <p>${info && info.Hadaf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {info ? (
                    <div className="progress">
                      <span
                        style={{
                          width: `${(info.Tabaruc / info.Hadaf) * 100}%`,
                        }}
                      >
                        <span>
                          {Math.floor(
                            (info.Tabaruc / info.Hadaf) * 100
                          ).toFixed(0)}
                          %
                        </span>
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="info_fursad">
                    <div className="from_bixin">
                      <Form
                        method="post"
                        action={`/mashruuc/${info && info._id}`}
                        onSubmit={PymentAction}
                      >
                        <div className="pyment_types">
                          <div className="raber_switcher">
                            {/* <span>Zaad</span> */}
                            <div className="input">
                              <label
                                onClick={toggale_zaad}
                                className={
                                  Pyment_type === "zaad"
                                    ? "zaad active"
                                    : "zaad"
                                }
                              >
                                <span>
                                  <i className="fa-solid fa-circle-check"></i>{" "}
                                  Zaad
                                </span>
                              </label>
                              <label
                                onClick={toggale_edahab}
                                className={
                                  Pyment_type === "edahab"
                                    ? "edahab active"
                                    : "edahab"
                                }
                              >
                                <span>
                                  <i className="fa-solid fa-circle-check"></i>{" "}
                                  edahab
                                </span>
                              </label>
                              <input
                                type="checkbox"
                                name="payment"
                                value={Pyment_type}
                              />
                            </div>
                            {/* <span>Edahab</span> */}
                          </div>
                        </div>
                        <div className="donter_info">
                          <div className="input_feilds">
                            <span className="Ll">
                              <i className="fa-solid fa-sack-dollar"></i>
                            </span>
                            <input
                              onChange={OnChangeInputes}
                              className={
                                (Form_data && Form_data.err_lacag) ||
                                (Form_data && Form_data.err_lacag1)
                                  ? "err"
                                  : ""
                              }
                              type="number"
                              placeholder="Lacagta"
                              name="Lacagta"
                            />
                          </div>
                          <div className="input_feilds">
                            {Pyment_type === "zaad" ? (
                              <span className="Ll">{telesom}</span>
                            ) : Pyment_type === "edahab" ? (
                              <span className="Ll">{Somtel}</span>
                            ) : (
                              <span className="Ll">No</span>
                            )}
                            <input
                              onChange={OnChangeInputes}
                              type="tel"
                              className={
                                Form_data && Form_data.err_no ? "err" : ""
                              }
                              placeholder="Lanbar"
                              name="Lanbar"
                              value={fildes.Lanbar}
                            />
                            <input
                              type="text"
                              name="Id"
                              hidden
                              value={info && info._id}
                            />
                            <input
                              onChange={OnChangeInputes}
                              type="number"
                              name="Tabaruc"
                              hidden
                              value={Number(total) + Number(fildes.Lacagta)}
                            />
                            <input
                              type="text"
                              hidden
                              value={Pyment_type}
                              name="PymentType"
                            />
                            {CrentUser ? (
                              <>
                                <input
                                  type="text"
                                  hidden
                                  name="Name"
                                  value={CrentUser.Magac}
                                />
                                <input
                                  type="text"
                                  hidden
                                  name="Tabaruce"
                                  value={CrentUser.Id}
                                />
                              </>
                            ) : (
                              <>
                                <input
                                  type="text"
                                  hidden
                                  name="Name"
                                  value={"Deeq Bixiye"}
                                />
                                <input
                                  type="text"
                                  hidden
                                  name="Tabaruce"
                                  value={"Ixsan2023"}
                                />
                              </>
                            )}
                          </div>
                          <button className={"bixi"}>
                            <i className="fa-solid fa-paper-plane"></i> Bixi
                            Hada
                          </button>
                          {CrentUser &&
                          CrentUser.Id === "6454dba1429d70970c9c0eff" ? (
                            <button className="bixi manually">
                              <Link to={`/manually/${info && info._id}`}>
                                <span>
                                  <i class="fa-solid fa-circle-plus"></i> Ku Dar
                                  Tabaruc (manually)
                                </span>
                              </Link>
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="qayb Pyments">
                  <div className="last_donote">
                    <h2>Tabarucyadii Ugu Danbeeyay</h2>
                    <p>
                      Macluumaadka dadkii ugu danbeeyay ee ku tabarucay
                      mashruucan kamid noqo dadka u tartamaya khayrka
                    </p>
                    {tabaruc.length > 0 ? (
                      <>
                        {tabaruc &&
                          tabaruc.map((tb) => (
                            <div className="tabaruc">
                              {/* <div className="user_img">
                                   <i className="fa-solid fa-circle-user"></i>
                                </div> */}
                              <div className="name_amout" key={tab._id}>
                                <h2>{tb.Name}</h2>
                                <div className="info_wind">
                                  <p>
                                    <i className="fa-solid fa-circle-dollar-to-slot"></i>{" "}
                                    Lacagta {tb.Lacagta} $
                                  </p>
                                  <p>
                                    <i className="fa-solid fa-clock"></i>{" "}
                                    {format(tb.createdAt)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </>
                    ) : (
                      <>
                        <EmpatyTabaruc />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ProInfoSkl />
          </>
        )}
      </>
    </>
  );
}

export const donote = async ({ request }) => {
  //const {GetAllProjects} = Auth()
  const actions = await request.formData();
  const fildesTabaruc = {
    Name: actions.get("Name"),
    Lanbar: actions.get("Lanbar"),
    Lacagta: actions.get("Lacagta"),
    Id: actions.get("Id"),
    Tabaruce: actions.get("Tabaruce"),
    PymentType: actions.get("PymentType"),
  };

  // aad Tabaruc
  return null;
  //return redirect("/")
};

export default InfoProject;
