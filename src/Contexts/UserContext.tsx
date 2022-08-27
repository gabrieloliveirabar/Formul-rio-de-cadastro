import { createContext, useEffect, useState,ReactNode } from "react";
import Api from "../Service";
import { IUser } from "./Types";

interface IUserProviderProps {
  children: ReactNode,
}

interface IUserContext {

user:IUser[];
setUser:React.Dispatch<React.SetStateAction<IUser[]>>;
status:boolean;
setStatus:React.Dispatch<React.SetStateAction<boolean>>;

}

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const [status, setStatus] = useState(false);
  const [user,setUser] = useState <IUser[]>([])


 
  useEffect(() => {
    const token = window.localStorage.getItem("@TOKEN");
    if (token) {
      Api.defaults.headers.common.authorization = `bearer ${token}`;
      Api.get("/profile")
      .then((response) => setUser(response.data))
      .catch((err)=>{
        if(err){window.localStorage.clear()}
      });
      
    }
  }, [user]);
 
  
  return (
    <UserContext.Provider
      value={{
        status,
        setStatus,
        setUser,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
