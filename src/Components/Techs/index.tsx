import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AtualizarModal } from "../Modals/AtualizarModale";
import { TechsStyled } from "./Techs";


interface ITechsProps {
  title: string,
  status: string,
  techId: string,
  
}



export const Techs = ({ title, status,techId}: ITechsProps)=> {
  
  const [ModalAtualizar, setModalAtualizar] = useState<Boolean>(false);
  return (
    <TechsStyled>
      <h1>{title}</h1>
      <div className="containerStatus">
        <button
          onClick={() => {
            setModalAtualizar(true);
          }}
          className="btnAtualizar"
        >
        
        </button>
        {ModalAtualizar && <AtualizarModal setModalAtualizar={setModalAtualizar}  title={ title} status={status} techId={techId}/>}
        <p>{status}</p>
      </div>
    </TechsStyled>
  );
}
