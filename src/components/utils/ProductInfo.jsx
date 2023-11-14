import { useSelector } from "react-redux";
import { calcDiscount } from "../../services/calcDiscount";
import styled from "styled-components";

function ProductInfo() {
  const { item } = useSelector((state) => state.cart);
  const { company, name, desc, price, discount } = item;
  return (
    <StyledProductInfo className="info">
      <h3>{company}</h3>
      <h1>{name}</h1>
      <p>{desc}</p>
      <div className="pricing">
        <div className="price">
          <h1 className="price">
            ${calcDiscount(price, discount)}
            <span>{discount}%</span>
          </h1>
          <p className="discount">${price}</p>
        </div>
      </div>
    </StyledProductInfo>
  );
}

export default ProductInfo;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledProductInfo = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--Orange);
    text-transform: uppercase;
    letter-spacing: 0.125rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    line-height: 1.5;
    color: var(--Dark-grayish-blue);
  }

  .pricing {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .price {
    width: 100%;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      background-color: var(--Pale-orange);
      color: var(--Orange);
      padding: 0.25rem 0.5rem;
      border-radius: var(--border-radius);
      font-weight: 700;
    }

    .discount {
      text-decoration: line-through;
    }
  }
`;
