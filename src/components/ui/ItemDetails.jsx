import styled from "styled-components";
import { ProductInfo, ProductQuantity, SlideShow } from "../utils";

const ItemDetails = () => {
  return (
    <StyledDetails>
      <SlideShow />
      <ProductInfo />
      <ProductQuantity />
    </StyledDetails>
  );
};
export default ItemDetails;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledDetails = styled.section`
  --padding-inline: clamp(1rem, 5%, 5rem);
  --content-max-width: 1fr;

  display: grid;
  margin: 0 auto;
  padding-bottom: 2rem;
  width: clamp(20rem, 100vw, 45rem);
  grid-template-columns:
    [full-width-start] var(--padding-inline)
    [content-start] var(--content-max-width) [content-end] var(--padding-inline)
    [full-width-end];

  > * {
    grid-column: content;
  }

  > .full-width {
    grid-column: full-width;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    width: auto;
    /* max-width: 80rem; */

    .slides {
      grid-row: span 3;
      grid-column: span 2;
      width: 100%;
      margin: 0;
      max-width: 40rem;
      padding: 0;

      .item-img {
        padding: 0 1rem;
      }
    }

    .info {
      grid-column: span 2;
    }

    .quantity {
      flex-direction: row;
      grid-column: span 2;
      align-self: center;
      /* grid-column: 3; */
    }
  }

  @media (min-width: 890px) {
    grid-template-columns: repeat(4, 1fr);

    .slides {
      grid-column: 1 / 3;
    }

    .info {
      grid-column: 3 / -1;
    }
  }

  @media (min-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    .slides {
      grid-column: 1 / 2;
      grid-row: span 2;
    }

    .info {
      grid-column: 2;
    }

    .quantity {
      grid-column: 2;
      grid-row: 2;
      align-self: start;
    }
  }
`;
