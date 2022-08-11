import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from'axios';
import Logo from "../../assets/Logo.svg";
import { ContainerHome, LinkRegister } from "../../Style/Register";

export const RegisterUsers = () => {
  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório.").email(),
    password: yup
      .string()
      .required("Senha obrigatória.")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password errado."),
    bio: yup.string().required("Bio obrigatória."),
    contact: yup.string().required("Contato Obrigatório."),

    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = ({email,password,name,bio,contact,course_module}) =>
  axios.post("https://kenziehub.herokuapp.com/users",email,password,name,bio,contact,course_module)
    
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
              <option value="M1">Módulo 01</option>
              <option value="M2">Módulo 02</option>
              <option value="M3">Módulo 03</option>
            </select>
            {errors.course_module?.message}
          </label>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </ContainerHome>
  );
};
