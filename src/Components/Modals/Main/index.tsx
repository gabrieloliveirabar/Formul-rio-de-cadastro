import { MainStyled } from "./main";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, ReactNode } from "react";
import { TechContext } from "../../../Contexts/TechContext";

interface IMainProps {
  labelUm: String;
  labelDois: string;
  children: ReactNode;
}

interface IOnSubmitFunctionProps {
  title:string,
  status: string
}
export const Main = ({ labelUm, labelDois, children }: IMainProps) => {
  const { setObjTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome Obrigatório!"),
    status: yup.string().required("Status obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitFunctionProps>({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data: IOnSubmitFunctionProps) {
    setObjTech(data);
  }
  return (
    <MainStyled>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>{labelUm}</label>
        <input type="text" placeholder="Ex:Typescript" {...register("title")} />
        {errors.title?.message}

        <label>{labelDois}</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message}

        {children}
      </form>
    </MainStyled>
  );
};
