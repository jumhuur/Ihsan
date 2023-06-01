import React from "react"
import { useContext } from "react"
import {AuthRadiuse, ACTIONS, INITIAL_SATATE} from "../radiuses/authRadiuse"
import { useReducer } from "react"
import { useState } from "react"
import { useEffect } from "react"
const AuthContext = React.createContext()


export const Auth = () => {
    return useContext(AuthContext)
}


export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthRadiuse, INITIAL_SATATE)
    const [CrentUser,setCrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )


    const setDatA = () => {
        setCrentUser(JSON.parse(localStorage.getItem('user')) || null)
    }

    const GetAllProjects = async() => {
        const responsive = await fetch("http://localhost:8880/Api/Caafimaad")
        const responsive1 = await fetch("http://localhost:8880/Api/Waxbarasho")
        const responsive2 = await fetch("http://localhost:8880/Api/Cunto")
        const responsive3 = await fetch("http://localhost:8880/Api/Hoy")
        const responsive4 = await fetch("http://localhost:8880/Api/Daryeel")
        const CoutTabaruc = await fetch("http://localhost:8880/Api/countTabaruc")
        const CoutUsers = await fetch("http://localhost:8880/Api/UserCounts")
        const TotalTabaruc = await fetch("http://localhost:8880/Api/Total")

        const res = await responsive.json()
        const res1 = await responsive1.json()
        const res2 = await responsive2.json()
        const res3 = await responsive3.json()
        const res4 = await responsive4.json()
        const countTabaruc = await CoutTabaruc.json()
        const CountUsers = await CoutUsers.json()
        const totalTabaruc = await TotalTabaruc.json()


        if(responsive.ok){
            dispatch({
                type:ACTIONS.GET_DATA,
                Caafimaad:res,
                Waxbarasho:res1,
                Cunto:res2,
                Hoy:res3,
                Daryeel:res4,
                CountTabaruc:countTabaruc,
                TotalTabaruc:totalTabaruc,
                CountUsres:CountUsers})
        }
    }


    useEffect(() => {
        setDatA()
        GetAllProjects()
    },[])
    
    //console.log(state)
    const value = {
        AuthRadiuse,
        ACTIONS,
        INITIAL_SATATE,
        CrentUser,
        dispatch,
        setDatA,
        state,
        GetAllProjects
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )


}