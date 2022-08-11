import * as yup from 'yup';
import axios from'axios';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Link,useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from "../../assets/Logo.svg";
import { DivLogin } from '../../Style/Login';



export const Login = () => {
  const Navigate = useNavigate()
  const formSchema = yup.object().shape({
    email:yup.string().required("Nome obrigatório!").email(),
    password:yup.string().required("Senha obrigatória!")
  });
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(formSchema),
  });
  const onSubmitFunction = (data)=>{
  axios.post("https://kenziehub.herokuapp.com/sessions",data)
  .then((response)=>{
    
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN",response.data.token);
    window.localStorage.setItem("@USERID",response.data.user.id)
  
  })
  .catch((err)=>console.log(err))}
  
  return (
    <DivLogin>
      <header>
        <img src={Logo} alt="LogoKenzie" />
      </header>
      <main>
        <h2 className="titleLogin">Login</h2>
        <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register("email")}  />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" {...register("password")}/>
          {errors.password?.message}
          <button className="btnLogin" type='submit' onClick={Navigate("/Users")}>Entrar</button>
          <ToastContainer />
        </form>
        <div className="containerRegister">
          <p className="descriptionRegister">Ainda não possui uma Conta?</p>
          <Link to={"/register"} className="Link">Cadastre-se</Link>
        </div>
      </main>
    </DivLogin>
  );
};
