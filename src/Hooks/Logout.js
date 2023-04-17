import { Auth } from "../context/Auth";
export const UseLogout = () => {
    const Logout = async() => {
    const {dispatch, ACTIONS, setDatA}  = Auth();
    localStorage.removeItem("user");
    dispatch({type:ACTIONS.lOGOUT})
    setDatA()
    }

    return {Logout}
}