import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../styles/GlobalStyles";
import { calcDiscount } from "../../services/calcDiscount";
import {
  decreaseItemInCartQuantity,
  increaseItemInCartQuantity,
  removeFromCart,
} from "../../features/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <StyledCart>
        <div className="title">Your cart is empty</div>
      </StyledCart>
    );
  }

  return (
    <StyledCart>
      <div className="cart-items">
        {cartItems.map((item) => {
          const { id, quantity, name, price, discount, images } = item;
          return (
            <div className="cart-item" key={id}>
              <div className="img">
                <img src={images[0].thumbNail} alt={name} />
              </div>
              <div className="info">
                <div className="name">{name}</div>
                <div className="price">
                  <span>${calcDiscount(price, discount)} x </span>
                  <span>{quantity} </span>
                  <span className="total">
                    ${calcDiscount(price, discount) * quantity}
                  </span>
                </div>
              </div>
              <div className="remove">
                <button
                  className="btn"
                  onClick={() => dispatch(decreaseItemInCartQuantity(id))}
                >
                  -
                </button>
                <button
                  className="delete-btn btn"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  <img src="/images/icon-delete.svg" alt="remove" />
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(increaseItemInCartQuantity(id))}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <StyledButton className="btn checkout">checkout</StyledButton>
      </div>
    </StyledCart>
  );
};
export default Cart;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledCart = styled.section`
  background-color: var(--White);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: fit-content;
  inset: 0;
  margin: 1rem;
  padding: 1rem;
  position: absolute;
  top: 4rem;
  width: 95%;
  max-width: 30rem;
  z-index: 11;

  .title {
    text-align: center;
  }

  .cart-item {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
  }

  .total {
    font-weight: 700;
  }

  .img {
    width: 4rem;
    img {
      border-radius: var(--border-radius);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .remove {
    display: flex;
    align-items: center;
    flex-direction: column;

    .btn {
      background: none;
      color: var(--Orange);
      font-size: 1.5rem;
      padding: 0;
      margin: 0;
    }

    img {
      width: 1rem;
    }
  }

  @media (min-width: 500px) {
    left: auto;
  }
`;
