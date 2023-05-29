import { Outlet, useParams } from "react-router-dom"
import Nav from "../Components/Nav"
import ProWelcome from "../Components/proWelcom"
import { useEffect, useState } from "react";
import InfoProject from "../Components/InfoProject";
import Footer from "../Components/Footer";
import Bugscroll from "../Components/ScrollFixed";
import { Auth } from "../context/Auth";
function Mashruuc() {
    const [Error, setError] = useState(null);
    const [Looding, setLooding] = useState(false);
    const [onePro,setonePro] = useState(null)
    const [Tabaruc,setTabaruc] = useState(null)
    const {GetAllProjects} = Auth()
    const {Id} = useParams()
    const GetOne = async() => {
        const OneProject = await fetch(`http://localhost:8880/Api/Mashruuc/${Id}`)
        const Tabaruc = await fetch(`http://localhost:8880/Api/GetTabarucyo/${Id}`)
        const res = await  OneProject.json()
        const res1 = await Tabaruc.json()
        if(!OneProject.ok){
            setError(res.Err)
            console.log("Not Found")
            setLooding(false)
        }

        if(OneProject.ok){
            setError(false)
            setonePro(res)
            setLooding(true)
            GetAllProjects()
        }

        if(!Tabaruc.ok){
            console.log("Not Found")
        }
        if(Tabaruc.ok){
            setTabaruc(res1)
        }
    }

    useEffect(() => {
        GetOne()
    },[])
    return (
    <> 
    <Bugscroll />
    <Nav />
    <ProWelcome info={onePro}/>
    <InfoProject info={onePro} Tabaruc={Tabaruc} />
    {/* <Outlet info={onePro}/> */}
    <Footer />
    </>
    )
}


export default Mashruuc