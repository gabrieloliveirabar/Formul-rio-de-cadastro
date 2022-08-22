import styled from "styled-components";
import "../../../Style/Reset.css";
import "../../../Style/base.css";

export const StyleAddModal = styled.div`
  width: 320px;
  height: 274px;
  position: absolute;
  top: 5px;
  right: 64px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .headerAddModal {
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

  @media screen and (min-width: 600px) {
    right: 300px;
  }
`;
