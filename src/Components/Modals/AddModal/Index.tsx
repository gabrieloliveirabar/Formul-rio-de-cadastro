import { StyleAddModal } from "../../../Style/Modals/AddModal";
import { Main } from "../Main";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

interface IAddModal {
  setOpenModalAdd: (arg:boolean)=>void;
  notify: ()=> void;
}


export const AddModal = ({ setOpenModalAdd }: IAddModal) => {
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

