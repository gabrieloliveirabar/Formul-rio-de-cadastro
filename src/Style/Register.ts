import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Reset.css";
import "./base.css";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 
  header {
    width: 96%;
    display: flex;
    justify-content: space-between;
    padding:20px 12px 38px;
  }
  main {
    width: 97%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--grey-3);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.3916px;
      color: var(--grey-0);
      margin-top: 33px;
      margin-bottom: 17px;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 9.59437px;
      color: var(--grey-1);
    }
  }
  form {

    width: 94%;
    
    padding: 33px 17px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0px auto;
      

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 9.73988px;
      color: var(--grey-0);
    }
    input {
      width: 100%;
      height: 38.38px;
      background: var(--grey-2);
      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
      margin-top:17px;
      margin-bottom: 21px;
    }
    select {
      width: 100%;
      height: 38.38px;
      background: var(--grey-2);
      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
      margin-top:17px;
      margin-bottom: 21px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.9865px;
      color: #868e96;

      option {
        color: white;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12.9865px;
        color: #868e96;
      }
    }
    .btnCadastrar {
      width: 100%;
      height: 38.38px;
      background: #59323f;
      border: 1.2182px solid #59323f;
      border-radius: 4px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.7925px;
      color: #FFFFFF;
    }
  }

  @media screen and (min-width:414px) {
    header{
      width:370px;
    }
    main{
      width: 370px;
    }
  }
`;
export const LinkRegister = styled(Link)`
  width: 56px;
  height: 32px;
  background: var(--grey-3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: var(--grey-0);
`;
