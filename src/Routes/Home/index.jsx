import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/Logo.svg";
import { ContainerHome, LinkHeader } from "../../Style/Home";
import { useState } from "react";

export const Home = () => {
    const [name,setName] = useState("")
  const user_id = window.localStorage.getItem("@USERID");
  const Api_Id = axios
  .get(`https://kenziehub.herokuapp.com/users/${user_id}`)
  .then((response)=>setName(response.data.name));

//   const ApiArray = axios
//     .get("https://kenziehub.herokuapp.com/users")
//     // .then((response) => console.log(response.data));

  
  return (
    <ContainerHome>
      <header>
        <img src={Logo} alt="" />
        <LinkHeader to={"/"}>Sair</LinkHeader>
      </header>
      <main>
        <div className="user">
          <h2>Olá,{name}</h2>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
      </main>
    </ContainerHome>
  );
};
