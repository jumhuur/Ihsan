import { useState } from "react";
import { Auth } from "../context/Auth";

export const UseGetOnePro = () => {
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  const { dispatch, ACTIONS, GetAllProjects } = Auth();

  const GetOne = async (Id) => {
    const OneProject = await fetch(`http://localhost:8880/Api/Mashruuc/${Id}`);
    const res = await OneProject.json();
    if (!OneProject.ok) {
      setError(res.Err);
      console.log("Not Found");
      setLooding(false);
    }

    if (OneProject.ok) {
      setError(false);
      dispatch({ type: ACTIONS.GET_ONE, OneProject: res });
      setLooding(true);
      GetAllProjects();
    }
  };

  return { GetOne };
};
