import { useState, useEffect, ReactNode } from "react";
import { createContext } from "react";
import Api from "../Service";


interface ITechsProvider {
  children: ReactNode,
}
export interface ITechContext {
  objTech:Object, 
  setObjTech: React.Dispatch<React.SetStateAction<{}>> ,
  setTechId: React.Dispatch<React.SetStateAction<string>>,
  deletarTech: (data: Object)=>void;
  
}

export const TechContext = createContext({} as ITechContext);
function TechsProvider({ children }:ITechsProvider) {
  const [objTech, setObjTech] = useState({});
  const [techId,setTechId] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.common.authorization = `bearer ${token}`;
    Api.post("/users/techs", objTech).then((res) => res);
  }, [objTech]);

 const deletarTech = (data: Object)=>{
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.common.authorization = `bearer ${token}`;
    Api.delete(`/users/techs/${techId}`,data)
    
  }
  

  return (
    <TechContext.Provider value={{ objTech, setObjTech,setTechId,deletarTech
     }}>
      {children}
    </TechContext.Provider>
  );
}
export default TechsProvider;
