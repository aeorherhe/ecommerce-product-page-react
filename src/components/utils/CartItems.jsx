import { useDispatch, useSelector } from "react-redux";
import { Cart, CartIcon } from "../ui";
import { closeCart, openCart } from "../../features/cartSlice";
import styled from "styled-components";
import Overlay from "./Overlay";

function CartItems() {
  const { totalQuantity, cartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <StyledCartItems>
      <div className="cart" onClick={() => dispatch(openCart())}>
        <CartIcon color={"#000"} />
        <span className="in-cart">{totalQuantity}</span>
      </div>
      <div className="user">
        <img src="/images/image-avatar.png" alt="avartar" />
      </div>
      {cartOpen && (
        <>
          <Cart />
          <Overlay onClick={() => dispatch(closeCart())} />
        </>
      )}
    </StyledCartItems>
  );
}

export default CartItems;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledCartItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 3rem;
  }

  .cart {
    position: relative;
    cursor: pointer;

    svg {
      width: 2rem;
    }
  }

  .in-cart {
    position: absolute;
    top: 0;
  }
`;
