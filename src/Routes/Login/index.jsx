import { TitleHeader } from "../TitleHeader";
import {Link} from "react-router-dom"


export const Login = () => {
  return (
    <>
      <header>
        <TitleHeader/>
      </header>
      <main>
        <form className="formLogin">
          <h2 className="titleLogin">Login</h2>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email"  />
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" />
          <button className="btnLogin">Entrar</button>
        </form>
        <div className="containerRegister">
          <p className="descriptionRegister">Ainda não possui uma Conta?</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
      </main>
    </>
  );
};
