import styled, { css } from "styled-components";
import Header from "./components/ui/Header";
import ItemDetails from "./components/ui/ItemDetails";
import { useDispatch, useSelector } from "react-redux";
import { Overlay, SlideShow } from "./components/utils";
import { closeSlide } from "./features/displayImgSlice";

function App() {
  const { isSlideOpen } = useSelector((state) => state.displayImg);
  const dispatch = useDispatch();
  return (
    <StyledApp type={isSlideOpen.toString()} className="main">
      <Header />
      <ItemDetails />
      {isSlideOpen && (
        <>
          <SlideShow />
          <Overlay onClick={() => dispatch(closeSlide())} />
        </>
      )}
    </StyledApp>
  );
}

export default App;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledApp = styled.main`
  margin: 0 auto;
  /* display: grid;
  gap: 2rem 0;
  padding-bottom: 2rem;
  grid-template-columns: [full-width-start] auto [content-start] 1fr [content-end] auto [full-width-end];

  > * {
    grid-column: content;
  }

  .full-width {
    grid-column: full-width;
  } */

  @media (min-width: 768px) {
    ${(props) =>
      props.type === "true" &&
      css`
        > .slides {
          position: absolute;
          z-index: 10;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          max-width: 40rem;

          .next,
          .prev {
            display: flex;
          }

          .close-icon {
            display: block;
            padding: 0.75rem;
            text-align: right;
            right: 0;
          }
        }
      `}
  }
`;
