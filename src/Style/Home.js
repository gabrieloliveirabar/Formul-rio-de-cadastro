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
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;

      color: var(--grey-0);
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #868e96;
    }
  }
  @media screen and (min-width: 600px) {
    main{
      .user{
        display: flex;
        flex-direction: column;}
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

      .user{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0px 81px;
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
