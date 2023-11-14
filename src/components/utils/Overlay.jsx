/* eslint-disable react/prop-types */
import styled from "styled-components";

const Overlay = ({ onClick }) => {
  return <StyledOverlay onClick={onClick}></StyledOverlay>;
};
export default Overlay;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledOverlay = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
