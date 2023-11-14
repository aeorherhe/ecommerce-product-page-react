import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeMenu } from "../../features/navMenuSlice";
import CloseIcon from "./CloseIcon";

const menuItems = [
  { id: 1, title: "collection", link: "#" },
  { id: 2, title: "men", link: "#" },
  { id: 3, title: "women", link: "#" },
  { id: 4, title: "about", link: "#" },
  { id: 5, title: "contact", link: "#" },
];

function NavMenuItems() {
  const dispatch = useDispatch();

  return (
    <StyledNavMenuItems>
      <div className="nav-close" onClick={() => dispatch(closeMenu())}>
        <CloseIcon color={"#000"} />
      </div>
      {menuItems.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </StyledNavMenuItems>
  );
}

export default NavMenuItems;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledNavMenuItems = styled.ul`
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  transition: var(--transition);
  gap: 0.25rem;

  li {
    font-weight: 700;
    letter-spacing: 0.25rem;
    color: var(--Dark-Blue);
    cursor: pointer;
    transition: var(--transition);
    padding: 1rem;
    width: 90%;

    &:hover {
      background-color: var(--Light-grayish-blue);
      color: var(--Orange);
      transform: translateX(0.5rem);
    }
  }

  .nav-close {
    display: block;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @media (min-width: 924px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    width: auto;

    li {
      width: auto;
      padding: 0 1rem;
      width: auto;
      transition: var(--transition);

      &:hover {
        background-color: transparent;
        color: var(--Orange);
        transform: translateY(-0.125rem);
      }
    }

    .nav-close {
      display: none;
    }
  }
`;
