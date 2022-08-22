import { StyleAtualizarModal } from "../../../Style/Modals/AtualizarModal"
import { Header } from "../Header"
import { Main } from "../Main"

export const AtualizarModal = ({setOpenModalAtualizar})=>{
    return(
    <StyleAtualizarModal>
        <Header title={"Tecnologia Detalhes"} setOpenModalAtualizar={setOpenModalAtualizar}/>
        <Main labelUm={"Nome do projeto"} labelDois={"Status"}>
            <div>
                <button>Salcar alterações</button>
                <button>Excluir</button>
            </div>
        </Main>
    </StyleAtualizarModal>)
}