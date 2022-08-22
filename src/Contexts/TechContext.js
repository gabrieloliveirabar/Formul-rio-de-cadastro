import { useState, useEffect } from "react";
import { createContext } from "react";
import Api from "../Service";
import { toast } from "react-toastify";

export const TechContext = createContext();
function TechsProvider({ children }) {
  const [objTech, setObjTech] = useState({});
  const [techId,setTechId] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.authorization = `bearer ${token}`;
    Api.post("/users/techs", objTech).then((res) => res);
  }, [objTech]);

 const deletarTech = (techId)=>{
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.authorization = `bearer ${token}`;
    Api.delete(`/users/techs/${techId}`)
    
  }
  const notify = () => {
    toast.success('Tecnologia criada com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <TechContext.Provider value={{ objTech, setObjTech,setTechId,deletarTech,notify
     }}>
      {children}
    </TechContext.Provider>
  );
}
export default TechsProvider;
