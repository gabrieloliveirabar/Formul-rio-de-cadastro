import styled from "styled-components";
import "../../../Style/Reset.css";
import "../../../Style/base.css";

export const StyleAtualizarModal = styled.div`
  width: 320px;
  height: 274px;
  position: absolute;
  top: 5px;
  right: 32px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .headerModalAtualizar {
    width: 100%;
    height: 40px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 0px;
    display: flex;
    h2 {
      padding: 10px;
    }
    button {
      width: 32px;
      background: transparent;
      border: none;
      border-radius: 4px;
      color: #868e96;
      padding: 10px;
    }
    button:hover {
      width: 32px;
      background: transparent;
      border: none;
      border-radius: 4px;
      color: #868e96;
      padding: 10px;
      cursor: pointer;
    }
  }
  .mainModalAtualizar {
    width: 100%;
    padding: 25px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 3.20867px 3.20867px;
    form {
      width: 90%;
    }
    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      font-family: var(--font-family);
      font-style: normal;
      font-weight: 400;
      font-size: 9.772px;
      color: var(--grey-0);
    }
    input {
      padding-left: 7px;
      width: 98%;
      height: 38.5px;
      margin-top: 17px;
      margin-bottom: 21px;
      border: none;
      border-radius: 4px;
    }
    select {
      padding-left: 7px;
      width: 99%;
      height: 38.5px;
      margin-top: 17px;
      margin-bottom: 16px;
      border: none;
      border-radius: 4px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13.0293px;
    }
    
      .btnExcluir {
        width: 100%;
        height: 38.37px;
        background: #868e96;
        border: 1.2182px solid #868e96;
        border-radius: 4px;
      }
      .btnExcluir:hover {
        width: 100%;
        height: 38.37px;
        background: #868e96;
        border: 1.2182px solid #868e96;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  
`;
