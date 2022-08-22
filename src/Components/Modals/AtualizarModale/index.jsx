import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext} from "react";
import { TechContext } from "../../../Contexts/TechContext";

import { StyleAtualizarModal } from "../../../Style/Modals/AtualizarModal";
import { ToastContainer } from "react-toastify";

export const AtualizarModal = ({ title,status,setModalAtualizar,techId }) => {
  
  const { deletarTech,notify } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome Obrigatório!"),
    status: yup.string().required("Status obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data) {
    
    deletarTech(techId,data.status)
    
  }
  return (
    <StyleAtualizarModal>
      <header className="headerModalAtualizar">
        <h2>TecnoloGias Detalhes</h2>
        <button onClick={() => setModalAtualizar(false)}>X</button>
      </header>
      <main className="mainModalAtualizar">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            Nome do Projeto
            <input type="text" value={title} {...register("title")} />
            {errors.title?.message}
          </label>
          <label>
            Status
            <select name="status" value={status} {...register('status')} >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status?.message}
          </label>
          <button type="submit" className="btnExcluir">Excluir</button>
          <ToastContainer/>
        </form>
      </main>
    </StyleAtualizarModal>
  );
};
