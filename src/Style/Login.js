import styled from "styled-components";
import "./Reset.css";
import "./base.css";

export const DivLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--grey-4);
  padding: 85px 29px 51px;

  header {
    margin-bottom: 20px;
  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 402px;
    background: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    padding: 0px 12px;
  }
  h2 {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 700;
    font-size: 14.439px;
    color: var(--grey-0);
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  label {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    color: var(--grey-0);
    margin-bottom: 17px;
  }
  input {
    height: 38.5px;
    width: 100%;

    margin-bottom: 21px;

    background: var(--grey-2);
    border: 0.9772px solid var(--grey-0);
    border-radius: 3.20867px;
  }
  button {
    background: var(--color-primary);
    height: 68.5px;
    width: 100%;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-family: var(--font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    color: #ffffff;
  }
  .containerRegister {
    width: 100%;
p {
      font-family: var(--font-family);
      font-style: normal;
      font-weight: 600;
      font-size: 9.62602px;
      color: var(--grey-1);
      margin-bottom: 17px;
    }
   
    .Link{
      height: 38.5px;
      width: 100%;
      padding:8px 91.5px;
      background: var(--grey-1);
      border: 1.2182px solid #868e96;
      border-radius: 4px;

      font-family: var(--font-family);
      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      color: white;
    }
  } 
  
`;
