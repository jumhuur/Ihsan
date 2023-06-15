import { Auth } from "../context/Auth";
export const UseLogout = () => {
  const Logout = () => {
    const { dispatch, ACTIONS, setDatA } = Auth();
    localStorage.removeItem("user");
    dispatch({ type: ACTIONS.lOGOUT });
    setDatA();
  };

  return { Logout };
};
