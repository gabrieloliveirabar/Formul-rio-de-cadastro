import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AtualizarModal } from "../Modals/AtualizarModale";
import { TechsStyled } from "./Techs";
export const Techs = ({ title, status,techId}) => {
  
  const [ModalAtualizar, setModalAtualizar] = useState(false);
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
        <RiDeleteBin5Line />
        </button>
        {ModalAtualizar && <AtualizarModal setModalAtualizar={setModalAtualizar}  title={ title} status={status} techId={techId}/>}
        <p>{status}</p>
      </div>
    </TechsStyled>
  );
}
