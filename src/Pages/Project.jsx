import { Outlet, useParams } from "react-router-dom"
import Nav from "../Components/Nav"
import ProWelcome from "../Components/proWelcom"
import { useEffect, useState } from "react";
import InfoProject from "../Components/InfoProject";
import Footer from "../Components/Footer";
function Mashruuc() {
    const [Error, setError] = useState(null);
    const [Looding, setLooding] = useState(false);
    const [onePro,setonePro] = useState(null)
    const {Id} = useParams()
    const GetOne = async() => {
        const OneProject = await fetch(`http://localhost:8880/Api/Mashruuc/${Id}`)
        const res = await  OneProject.json()
        if(!OneProject.ok){
            setError(res.Err)
            console.log("Not Found")
            setLooding(false)
        }

        if(OneProject.ok){
            setError(false)
            setonePro(res)
            setLooding(true)
        }
    }
    //console.log(onePro)

    useEffect(() => {
        GetOne()
    },[])
    return (
    <> 
    <Nav />
    <ProWelcome info={onePro} />
    <InfoProject info={onePro} />
    {/* <Outlet info={onePro}/> */}
    <Footer />
    </>
    )
}


export default Mashruuc