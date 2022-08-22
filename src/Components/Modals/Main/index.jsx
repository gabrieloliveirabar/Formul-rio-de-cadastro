import { MainStyled } from "./main";
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import Api from "../../../Service";


export const Main = ({ labelUm, labelDois,children }) => {

    const {setObjTech,setTechId} = useContext(TechContext)

    const formSchema = yup.object().shape({
        title:yup.string().required("Nome Obrigatório!"),
        status:yup.string().required("Status obrigatório!")
    })
    
    const {
        register,
        handleSubmit,formState:{errors}
    }  = useForm({resolver: yupResolver(formSchema)})
    
    function onSubmitFunction(data){
       setObjTech(data)
        
    }
    
     useEffect(()=>{
      Api.get(`/users`).then((response)=>console.log(response))
     },[])
    
    
   
  return (
    <MainStyled>
      <form onSubmit={handleSubmit(onSubmitFunction)} >
        <label>
          {labelUm}
          <input type="text"  name="title" placeholder="Ex:Typescript" 
          {...register("title")} />
          {errors.title?.message}
        </label>
        <label>
          {labelDois}
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message}
        </label>
        {children}
      </form>
    </MainStyled>
  );
};
