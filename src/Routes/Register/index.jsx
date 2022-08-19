import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { ContainerHome, LinkRegister } from "../../Style/Register";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import Api from "../../Service";
export const RegisterUsers = () => {
  const [Validation,setValidation] = useState(false);


  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório.").email(),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8}/, "deve conter ao menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password errado."),
    bio: yup.string().required("Bio obrigatória."),
    contact: yup.string().required("Contato Obrigatório."),
    course_module: yup.string(),
  });
  const notify = ()=>{Validation===true
  ?toast.success('Conta criada com sucesso!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }):toast.error('ops, Algo deu errado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {

    data?setValidation(true):setValidation(false)
    Api.post("/users",data)
  .then((response)=>console.log(response))};
  
   
  
  return (
    <ContainerHome>
      <header>
        <img src={Logo} alt="" />
        <LinkRegister to={"/"}>Voltar</LinkRegister>
      </header>
      <main>
        <h2>Crie Sua conta</h2>
        <p>Rápido e gratis, vamos nessa</p>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            Nome
            <input
              type="text"
              name="name"
              id="name"
              {...register("name")}
              placeholder="Digite aqui seu nome"
            />
            {errors.name?.message}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
              placeholder="Digite aqui seu email"
            />
            {errors.email?.message}
          </label>

          <label>
            Senha
            <input
              type="password"
              name="password"
              id="password"
              {...register("password")}
              placeholder="Digite aqui sua senha"
            />
            {errors.password?.message}
          </label>

          <label>
            Confirmar Senha
            <input
              type="password"
              name="confirmPassword"
              id="confirmPasword"
              placeholder="Digite aqui sua senha"
              {...register("confirmPassword")}
             
            />
             {errors.confirmPassword?.message}
          </label>

          <label>
            Bio
            <input
              type="text"
              name="bio"
              id="bio"
              {...register("bio")}
              placeholder="Digite aqui sua bio"
            />
            {errors.bio?.message}
          </label>

          <label>
            Contato
            <input
              type="text"
              name="contatp"
              id="contato"
              {...register("contact")}
              placeholder="Digite aqui sua contato"
            />
            {errors.contact?.message}
          </label>

          <label>
            Selecionar módulo
            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="M1">Primeiro módulo (Introdução ao Frontend)</option>
              <option value="M2">Segundo módulo (Frontend Avançado)</option>
              <option value="M3">Terceiro módulo (Introdução ao Backend)</option>
            </select>
            {errors.course_module?.message}
          </label>

          <button type="submit" className="btnCadastrar" onClick={notify}>Cadastrar</button>
          <ToastContainer />
        </form>
      </main>
    </ContainerHome>
  );
};
