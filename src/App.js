import { useState } from "react";
import Card, { donote } from "./Components/Card";
import Home from "./Pages/Home";
import "./static/Css/main.scss"
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import CDaryeel, { donoteDaryeel } from "./Components/Card_Daryeel";
import CWaxbarsho, { donoteWax } from "./Components/C_Waxbarasho";
import CCunto, { donoteCunto } from "./Components/C_Cunto";
import Choy, { donoteHoy } from "./Components/C_Hoy";
import Login from "./Components/Login";
import Sinup from "./Components/Sinup";
import { Auth } from "./context/Auth";
import Video from "./Components/video";
import Mashruuc from "./Pages/Project";

function App() {
  const [v_active,setv_active] = useState(false)
   const [login,setLogin] = useState(false)
   const {CrentUser} = Auth()

  // video activite
  const active_v = function(){
      setv_active(!v_active)
      console.log(v_active)
  }

  // Login Activate

  const Loginfunc = () => {
      setLogin(!login)
      console.log(login)
  }
  const Router = createBrowserRouter (
    createRoutesFromElements (
      <>
      <Route path="/" element={<Home video_active={v_active} func={active_v} LoginFunc={Loginfunc} />} >
        <Route path="/" element={<Card func={active_v} />} action={donote} />
        <Route path="Waxbarasho" element={<CWaxbarsho func={active_v} />} action={donoteWax} />
        <Route path="Cunto" element={<CCunto func={active_v}  /> } action={donoteCunto} />
        <Route path="Hoy" element={<Choy func={active_v} />} action={donoteHoy}/>
        <Route path="Daryeel" element={<CDaryeel func={active_v} />} action={donoteDaryeel}/>
        <Route path="Login" element={!CrentUser ? <Login activate={login} loginfunc={Loginfunc} /> : <Navigate to={"/"} />} />
        <Route path="Signin" element={!CrentUser ? <Sinup /> : <Navigate to="/" />}/>
        <Route path="/:Id" element={<Video />} />
      </Route>
      <Route path="/Mashruuc/:Id" element={<Mashruuc />}>

      </Route>
      <Route path="*" element={<p>Not foud the page</p>} />
      </>
    )
  )
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
