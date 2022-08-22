import { StyleAddModal } from "../../../Style/Modals/AddModal";
import { Main } from "../Main";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { ToastContainer } from "react-toastify";

export const AddModal = ({ setOpenModalAdd }) => {
  const { notify } = useContext(TechContext);
  return (
    <StyleAddModal>
      <header className="headerAddModal">
        <h2>Cadastrar tecnologia</h2>
        <button onClick={() => setOpenModalAdd(false)}>X</button>
      </header>
      <Main labelUm={"Nome"} labelDois={"Selecionar status"}>
        <button type="submit" onClick={() => notify()} className="btnCadastro">
          Cadastrar Tecnologia
        </button>
        <ToastContainer />
      </Main>
    </StyleAddModal>
  );
};
