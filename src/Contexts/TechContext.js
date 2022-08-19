import { useState,useEffect } from "react";
import { createContext } from "react";
import Api from "../Service";

export const TechContext = createContext()
function TechsProvider({children}){
const [objTech,setObjTech] = useState({})


useEffect(()=>{
const token = window.localStorage.getItem("@TOKEN");
Api.defaults.headers.authorization = `bearer ${token}`;
Api.post("/users/techs",objTech)
.then((res)=> console.log(res))},[objTech])




return(
<TechContext.Provider value={
   { objTech,
    setObjTech}
    }>
{children}
</TechContext.Provider>)
}
export default TechsProvider














