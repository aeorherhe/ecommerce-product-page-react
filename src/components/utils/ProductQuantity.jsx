import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../features/cartSlice";
import styled from "styled-components";
import { StyledButton } from "../../styles/GlobalStyles";
import { CartIcon } from "../ui";

function ProductQuantity() {
  const { item } = useSelector((state) => state.cart);
  const { id, quantity } = item;
  const dispatch = useDispatch();
  return (
    <StyledProductQuantity className="quantity">
      <div className="control">
        <button
          className="btn"
          onClick={() => dispatch(decreaseItemQuantity(id))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="btn"
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          +
        </button>
      </div>
      <StyledButton
        className="btn add-to-cart"
        onClick={() => dispatch(addToCart({ id, quantity }))}
      >
        <CartIcon color={"#fff"} />
        add to cart
      </StyledButton>
    </StyledProductQuantity>
  );
}

export default ProductQuantity;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .control {
    align-items: center;
    background-color: var(--Light-grayish-blue);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    place-items: center;
    width: 100%;

    .btn {
      background: none;
      color: var(--Orange);
      font-size: 2rem;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
