import { useState } from "react";
import { Auth } from "../context/Auth";

export const UseLogin = () => {
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  const { dispatch, ACTIONS, setDatA, GetAllProjects } = Auth();

  const Login = async (Lanbar, Password) => {
    setLooding(true);
    setError(false);

    const responsive = await fetch("http://localhost:8880/Api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Lanbar, Password }),
    });

    const json = await responsive.json();
    if (!responsive.ok) {
      setError(json.Error);
      setLooding(false);
    }

    if (responsive.ok) {
      setError(false);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: ACTIONS.LOGIN, payload: json });
      setLooding(false);
      setDatA();
      GetAllProjects();
    }
  };
  return { Login, Looding, Error };
};
