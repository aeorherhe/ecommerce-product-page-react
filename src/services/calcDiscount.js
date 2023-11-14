export const calcDiscount = (price, discount) => {
  return price - discount * 0.01 * price;
};

export const calcQuantity = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};
