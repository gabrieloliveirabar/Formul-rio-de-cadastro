import { HeaderStyled } from "./header"

export const Header = ({title,setOpenModal})=>{
    return(
        <HeaderStyled>
            <h2>{title}</h2>
            <button onClick={()=>{setOpenModal(false)}}>X</button>
        </HeaderStyled>
    )
}