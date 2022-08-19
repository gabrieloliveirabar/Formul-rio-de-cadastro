import { createContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../Service";
import { toast } from "react-toastify";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [Status, setStatus] = useState(false);
  const [user,setUser] = useState([])

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório!").email(),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
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

  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    if (token) {
      Api.defaults.headers.authorization = `bearer ${token}`;
      Api.get("/profile")
      .then((response) => setUser(response.data))
      .catch((err)=>{
        if(err){window.localStorage.clear()}
      });
      
    }
  }, [user]);
 
  const notify = () => {
    toast.error("ops, Algo deu errado!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <UserContext.Provider
      value={{
        Status,
        register,
        handleSubmit,
        errors,
        onSubmitFunction,
        notify,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
