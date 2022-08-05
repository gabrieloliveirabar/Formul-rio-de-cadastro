import { TitleHeader } from "../TitleHeader";
import {Link} from "react-router-dom"


export const Register = () => {
  return (
    <>
      <header>
        <TitleHeader />
       <Link to={"/"}>Voltar</Link>
      </header>
      <main>
        <form >
            <div className="titleForm">
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
            </div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="bio">Bio</label>
            <input type="text" name="bio" id="bio" />
            <label htmlFor="cellphone">Contato</label>
            <input type="number" name="cellphone" id="cellphone" />
            <label htmlFor="selectModule"></label>
            <select name="selectModule" id="selectModule">
                <option value="M3">Módulo 03</option>
            </select>
            
            <button className="btnCadastrar">Cadastrar</button>
        </form>
      </main>
    </>
  );
};
