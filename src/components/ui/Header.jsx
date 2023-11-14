import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "./index";
import { closeMenu } from "../../features/navMenuSlice";
import { Overlay } from "../utils";

const Header = () => {
  const { isMenuOpen } = useSelector((state) => state.navMenu);
  const dispatch = useDispatch();

  return (
    <StyledHeader className="main full-width">
      <NavBar />
      {isMenuOpen && <Overlay onClick={() => dispatch(closeMenu())} />}
    </StyledHeader>
  );
};
export default Header;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledHeader = styled.section`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
