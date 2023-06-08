import { useState } from "react";
import Card from "./Components/Card";
import Home from "./Pages/Home";
import "./static/Css/main.scss"
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import CDaryeel from "./Components/Card_Daryeel";
import CWaxbarsho from "./Components/C_Waxbarasho";
import CCunto from "./Components/C_Cunto";
import Choy  from "./Components/C_Hoy";
import Login from "./Components/Login";
import Sinup from "./Components/Sinup";
import { Auth } from "./context/Auth";
import Video from "./Components/video";
import Mashruuc from "./Pages/Project";
import InfoProject, { donote } from "./Components/InfoProject";
import AddProjects from "./Components/addProject";
import Manuelly from "./Pages/Manuelly";


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
        <Route path="/" element={<Card func={active_v} />} />
        <Route path="Waxbarasho" element={<CWaxbarsho func={active_v} />} />
        <Route path="Cunto" element={<CCunto func={active_v}  /> } />
        <Route path="Hoy" element={<Choy func={active_v} />}/>
        <Route path="Daryeel" element={<CDaryeel func={active_v} />}/>
        <Route path="Login" element={!CrentUser ? <Login activate={login} loginfunc={Loginfunc} /> : <Navigate to={"/"} />} />
        <Route path="Signin" element={!CrentUser ? <Sinup /> : <Navigate to="/" />}/>
      </Route>
      <Route path="/Mashruuc/:Id" element={<Mashruuc />}>
        <Route path="/Mashruuc/:Id" element={CrentUser ? <InfoProject /> : <Navigate to="/" />} action={donote} />
      </Route>
      <Route path="/manually/:Id"
       element={

        CrentUser && CrentUser.Id === "6454dba1429d70970c9c0eff" ?
        <Manuelly /> :<Navigate to="/" /> 
      } action={donote}>
      </Route>
      <Route path="/addProject"  element={CrentUser ? <AddProjects /> : <Navigate to="/" />} />
      <Route path="*" element={<p>Not foud the page</p>} />
      </>
    )
  )
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
