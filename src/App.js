import { useState } from "react";
import Card, { donote } from "./Components/Card";
import Home from "./Pages/Home";
import "./static/Css/main.scss"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import CDaryeel from "./Components/Card_Daryeel";
import CWaxbarsho, { donoteWax } from "./Components/C_Waxbarasho";
import CCunto from "./Components/C_Cunto";
import Choy from "./Components/C_Hoy";
import Login from "./Components/Login";
import Sinup from "./Components/Sinup";

function App() {
  const [v_active,setv_active] = useState(false)
   const [login,setLogin] = useState(false)

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
      <Route path="/" element={<Home video_active={v_active} func={active_v} LoginFunc={Loginfunc} />} >
        <Route path="/" element={<Card func={active_v} />} action={donote} />
        <Route path="Waxbarasho" element={<CWaxbarsho func={active_v} />} action={donoteWax} />
        <Route path="Cunto" element={<CCunto func={active_v} />} />
        <Route path="Hoy" element={<Choy func={active_v} />} />
        <Route path="Daryeel" element={<CDaryeel func={active_v} />} />
        <Route path="Login" element={<Login activate={login} loginfunc={Loginfunc} />} />
        <Route path="Signin" element={<Sinup />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
