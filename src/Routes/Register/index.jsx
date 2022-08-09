import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export const Register = () => {
  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório.").email(),
    password: yup.string().required("Senha obrigatória."),

    confirmPassword: yup
      .string()
      .required("Senha obrigatória.")

      .oneOf([yup.ref("password"), null], "Password errado."),
    bio: yup.string().required("Bio obrigatória."),
    cellphone: yup
    .string()
    .required("Telefone obrigatório.")
    .matches('^(([0-9]{2}\))([9]{1})?([0-9]{4})-([0-9]{4})'),
    
    selectModule: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => console.log(data);
  return (
    <>
      <header>
        
        <Link to={"/"}>Voltar</Link>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="titleForm">
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" {...register("name")} />
          {errors.name?.message}
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password")}
          />
          {errors.password?.message}
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message}
          <label htmlFor="bio">Bio</label>
          <input type="text" name="bio" id="bio" {...register("bio")} />
          {errors.bio?.message}
          <label htmlFor="cellphone">Contato</label>
          <input name="cellphone" id="cellphone" {...register("cellphone")} />
          {errors.cellphone?.message}
          <label htmlFor="selectModule"></label>
          <select
            name="selectModule"
            id="selectModule"
            {...register("selectModule")}
          >
            <option value="M1">Módulo 01</option>
            <option value="M2">Módulo 02</option>
            <option value="M3">Módulo 03</option>
          </select>
          {errors.selectModule?.message}

          <button className="btnCadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </main>
    </>
  );
};
