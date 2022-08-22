import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AtualizarModal } from "../Modals/AtualizarModale";
import { TechsStyled } from "./Techs";
export const Techs = ({ title, status }) => {
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
          <AiFillEdit />
        </button>
        {ModalAtualizar && <AtualizarModal />}
        <p>{status}</p>
      </div>
    </TechsStyled>
  );
};
{
  /*  <AtualizarModal/>*/
}
