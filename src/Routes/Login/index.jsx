import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Logo from "../../assets/Logo.svg";
import { DivLogin } from "../../Style/Login";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext} from "../../Contexts/UserContext";


export const Login = () => {
  const Navigate = useNavigate();
  const {Status,register,handleSubmit,errors,onSubmitFunction,notify} = useContext(UserContext)
  return (
    <DivLogin>
      <header>
        <img src={Logo} alt="LogoKenzie" />
      </header>
      <main>
        <h2 className="titleLogin">Login</h2>
        <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
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
          <button className="btnLogin" type="submit" onClick={()=>{
            if(Status===true){
              
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
