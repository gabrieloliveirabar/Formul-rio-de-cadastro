import { TitleHeader } from "../../Components/TitleHeader"
import{Link} from "react-router-dom"

export const Home = ()=>{
    return (
        <>
        <header>
            <TitleHeader/>
           <Link to={"/"}>Sair</Link>
        </header>
        <main>
        <h2 >Olá,Samuel Leão</h2>
        <p>Primeiro módulo (Introdução ao Frontend)</p>
        </main>
        </>
    )
}