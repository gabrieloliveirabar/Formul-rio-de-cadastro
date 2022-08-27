import * as yup from "yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { StyleAtualizarModal } from "../../../Style/Modals/AtualizarModal";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

interface IAtualizarModalProps {
  title: string;
  status: string;
  setModalAtualizar: (arg: Boolean) => void;
  techId: string;
}

interface IonSubmitFunctionProps {
  status: string;
  title: string;
}

export const AtualizarModal = ({
  title,
  status,
  setModalAtualizar,
  techId,
}: IAtualizarModalProps) => {
  const { deletarTech, setTechId } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome Obrigatório!"),
    status: yup.string().required("Status obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IonSubmitFunctionProps>({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data: IonSubmitFunctionProps) {
    console.log(techId)
    setTechId(techId);
    deletarTech(data.status);
  }

  const notify = () => {
    toast.success("Tecnologia criada com sucesso!", {
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
    <StyleAtualizarModal>
      <header className="headerModalAtualizar">
        <h2>TecnoloGias Detalhes</h2>
        <button onClick={() => setModalAtualizar(false)}>X</button>
      </header>
      <main className="mainModalAtualizar">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>Nome do Projeto</label>
          <input type="text" value={title} {...register("title")} />
          {errors.title?.message}

          <label>Status</label>
          <select value={status} {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message}

          <button
            type="submit"
            className="btnExcluir"
            onClick={() => {
              notify();
              setModalAtualizar(false);
            }}
          >
            Excluir
          </button>
          <ToastContainer />
        </form>
      </main>
    </StyleAtualizarModal>
  );
};

// name="status"
