import { useState, useEffect } from "react";
import { createContext } from "react";
import Api from "../Service";

export const TechContext = createContext();
function TechsProvider({ children }) {
  const [objTech, setObjTech] = useState({});
  const [techId,setTechId] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.authorization = `bearer ${token}`;
    Api.post("/users/techs", objTech).then((res) => res);
  }, [objTech]);

const deletarTech = ()=>{
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.authorization = `bearer ${token}`;
    Api.delete(`/users/techs/${techId}`)
    
  }

  return (
    <TechContext.Provider value={{ objTech, setObjTech,setTechId }}>
      {children}
    </TechContext.Provider>
  );
}
export default TechsProvider;
