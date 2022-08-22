import styled from "styled-components";

export const MainStyled = styled.main`
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
  .btnCadastro {
    height: 38px;
    width: 92%;

    margin: 0px auto;
    background: var(--color-primary);
    border: none;
    border-radius: 4px;

    font-family: var(--font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
  }
  .btnCadastro:hover {
    height: 38px;
    width: 92%;

    margin: 0px auto;
    background: var(--color-primary);
    border: none;
    border-radius: 4px;

    font-family: var(--font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    cursor: pointer;
  }
`;
