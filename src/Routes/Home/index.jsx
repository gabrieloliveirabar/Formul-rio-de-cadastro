import axios from "axios";
import Logo from "../../assets/Logo.svg";
import { ContainerHome, LinkHeader } from "../../Style/Home";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { Techs } from "../../Components/Techs";
import { AddModal } from "../../Components/Modals/AddModal/Index";

export const Home = () => {
  const [name, setName] = useState("");
  const [openModalAdd,setOpenModalAdd] = useState(false);

  const { user } = useContext(UserContext);
 
  const ArrayTechs = user.techs;
  const user_id = window.localStorage.getItem("@USERID");
  useEffect(()=>{
    axios
    .get(`https://kenziehub.herokuapp.com/users/${user_id}`)
    .then((response) => setName(response.data.name))},[]) 



  return (
    <ContainerHome>
      <header>
        <img src={Logo} alt="" />
        <LinkHeader
          to={"/"}
          onClick={() => {
            window.localStorage.clear();
          }}
        >
          Sair
        </LinkHeader>
      </header>
      <main>
        <div className="user">
          <h2>Olá, {name}</h2>
          <p>Primeiro módulo (Introdução ao Frontend)</p>
        </div>
        <div className="ContainerTechs">
          <div className="decriptionUl">
            <h1>Tecnologias</h1>
            <button className="buttonOpen" onClick={()=>{setOpenModalAdd(true)}}>+</button>
            {
            openModalAdd && <AddModal setOpenModalAdd={setOpenModalAdd}/>
            } 

          </div>
          <ul>
            {ArrayTechs?.map((elem) => (             
               <li key={elem.id}>
               <Techs title={elem.title} status={elem.status} 
                techId={elem.id}/>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ContainerHome>
  );
};
