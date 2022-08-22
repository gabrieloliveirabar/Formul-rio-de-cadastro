import { HeaderStyled } from "./header";

export const Header = ({ title, setOpenModalAdd}) => {
  return (
    <HeaderStyled>
      <div>
        <h2>{title}</h2>
        <button
          onClick={() => {
            setOpenModalAdd(false)
            
          }}
        >
          X
        </button>
      </div>
    </HeaderStyled>
  );
};
