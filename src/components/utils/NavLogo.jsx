import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openMenu } from "../../features/navMenuSlice";

function NavLogo() {
  const dispatch = useDispatch();

  return (
    <StyledNavLogo type={openMenu.toString()}>
      <div className="logo">
        <div className="nav-open">
          <img
            src="/images/icon-menu.svg"
            alt="nav open"
            onClick={() => dispatch(openMenu())}
          />
        </div>
        <div className="nav-logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
      </div>
    </StyledNavLogo>
  );
}

export default NavLogo;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledNavLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 0; */

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
