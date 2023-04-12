import { useState } from "react";
import Card from "./Components/Card";
import Home from "./Pages/Home";
import "./static/Css/main.scss"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import CDaryeel from "./Components/Card_Daryeel";
import CWaxbarsho from "./Components/C_Waxbarasho";
import CCunto from "./Components/C_Cunto";
import Choy from "./Components/C_Hoy";

function App() {
  const [v_active,setv_active] = useState(false)

  const active_v = function(){
      setv_active(!v_active)
      console.log(v_active)
  }
  const Router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<Home video_active={v_active} func={active_v} />} >
        <Route path="/" element={<Card func={active_v} />} />
        <Route path="Waxbarasho" element={<CWaxbarsho func={active_v} />} />
        <Route path="Cunto" element={<CCunto func={active_v} />} />
        <Route path="Hoy" element={<Choy func={active_v} />} />
        <Route path="Daryeel" element={<CDaryeel func={active_v} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
