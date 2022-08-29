import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DivLogin } from "../../Style/Login";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext} from "../../Contexts/UserContext";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../Service";
import Logo from "../../assets/Logo.svg"



interface IOnSubmitFunctionProps {
  data: object,
  email:String,
  password:string
}
export const Login = () => {
  
  
  const {status, setStatus} = useContext(UserContext)

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório!").email(),
    password: yup.string().required("Senha obrigatória!"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitFunctionProps> ({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({data}:IOnSubmitFunctionProps) => {
    Api.post("/sessions", data)
      .then((response) => {
        if (response.status === 200) {
          setStatus(true);
          window.localStorage.clear();
          window.localStorage.setItem("@TOKEN", response.data.token);
          window.localStorage.setItem("@USERID", response.data.user.id);
        }
      })
      .catch((err) => console.log(err));
  };


  const Navigate = useNavigate();
  return (
    <DivLogin>
      <header>
        <img src={Logo} alt="LogoKenzie" />
      </header>
      <main>
        <h2 className="titleLogin">Login</h2>
        <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="email">Email</label>
          <input type="email"  id="email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password?.message}
          <button className="btnLogin" type="submit" onClick={()=>{
            if(status===true){             
              Navigate("/Users")}
            }
           }>
            Entrar
          </button>
          <ToastContainer />
          
        </form>
        <div className="containerRegister">
          <p className="descriptionRegister">Ainda não possui uma Conta?</p>
          <Link to={"/register"} className="Link">
            Cadastre-se
          </Link>
        </div>
      </main>
    </DivLogin>
  );
};
