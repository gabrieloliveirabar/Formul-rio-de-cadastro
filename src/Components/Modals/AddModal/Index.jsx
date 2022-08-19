import { StyleAddModal } from "../../../Style/Modals/AddModal"
import { Header } from "../Header"
import { Main } from "../Main"

export const AddModal = ({setOpenModal})=>{
    return(
    <StyleAddModal>
    <Header title={"Tecnologia Detalhes"} setOpenModal={setOpenModal} />
    <Main labelUm={"Nome"} labelDois={"Selecionar status"}>   
            <button type="submit"
            className="btnCadastro">Cadastrar Tecnologia</button>
    </Main>
    </StyleAddModal>)
}