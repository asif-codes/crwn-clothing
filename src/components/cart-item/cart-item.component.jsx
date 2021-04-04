import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartItemName,
} from "./cart-tem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
