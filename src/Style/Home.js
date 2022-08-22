import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Reset.css";
import "./base.css";
export const ContainerHome = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--grey-4);
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 13px;
    border-bottom: 1px solid var(--grey-3);
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    .user {
      padding: 34px 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-bottom: 1px solid var(--grey-3);
    }
    .ContainerTechs {
      width: 100%;
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #868e96;
    }

    .decriptionUl {
      width: 305px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 26px;
      margin-bottom: 28px ;

      h1 {
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
      }
      .buttonOpen {
        width: 32px;
        height: 32px;
        background: #212529;
        border: none;
        border-radius: 4px;
      }
    }
    ul {
      width: 305px;
      background: #212529;
      padding: 0px 10px;
      padding-top: 10px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    li {
      width: 97%;;
      height: 49px;
      background: var(--grey-4);
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 10px 5px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        color: var(--grey-0);
        
      }
      p {
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 300;
        font-size: 14.2123px;
        color: #868e96;
      }
    }
  }
  @media screen and (min-width: 600px) {
    main {
      .user {
        display: flex;
        flex-direction: column;
      }
      .decriptionUl{
        width: 77%;
      }
      ul{
        width:77%;
      }
    }
  }
  @media screen and (min-width: 413px) {
    background: var(--grey-4);

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0px 81px;
    }
    main {
      .user {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px 81px;
      }
      .decriptionUl{
        width:77%;
      }
      ul{
        width:77%;
      }
     
    }
  }
`;
export const LinkHeader = styled(Link)`
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
