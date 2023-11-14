import { useSelector } from "react-redux";
import { CartItems, NavLogo, NavMenuItems } from "../utils";
import styled from "styled-components";

function NavBar() {
  const { isMenuOpen } = useSelector((state) => state.navMenu);

  return (
    <StyledNavBar>
      <NavLogo />
      <div className={`nav-menu ${isMenuOpen && "nav-open"}`}>
        <NavMenuItems />
      </div>
      <CartItems />
    </StyledNavBar>
  );
}

export default NavBar;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--White);

  .nav-menu {
    gap: 0.25rem;
    inset: 0;
    position: absolute;
    transform: translateX(-100%);
    transition: var(--transition);
    width: 60%;
    z-index: 11;
  }

  .nav-open {
    transform: translateX(0);
  }

  .nav-close,
  .nav-open {
    cursor: pointer;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 924px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;

    .nav-menu {
      position: static;
      height: auto;
      transform: translateX(0);
      width: 100%;
      z-index: 0;
    }

    .nav-close,
    .nav-open {
      display: none;
    }
  }
`;
