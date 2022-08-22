import { StyleAddModal } from "../../../Style/Modals/AddModal"
import { Header } from "../Header"
import { Main } from "../Main"

export const AddModal = ({setOpenModalAdd})=>{
    return(
    <StyleAddModal>
    <Header title={"Tecnologia Detalhes"} setOpenModalAdd={setOpenModalAdd} />
    <Main labelUm={"Nome"} labelDois={"Selecionar status"}>   
            <button type="submit"
            className="btnCadastro">Cadastrar Tecnologia</button>
    </Main>
    </StyleAddModal>)
}