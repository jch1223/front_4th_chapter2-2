import React from 'react';

import { getMaxApplicableDiscount } from '@/refactoring/entity/cart/utils/cart';
import type { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  cart: CartItemType;
  onIncreaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecreaseQuantity: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemoveCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CartItem = ({ cart, onIncreaseQuantity, onDecreaseQuantity, onRemoveCart }: CartItemProps) => {
  const appliedDiscount = getMaxApplicableDiscount(cart);

  return (
    <div className="flex items-center justify-between rounded bg-white p-3 shadow">
      <div>
        <span className="font-semibold">{cart.product.name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {cart.product.price}원 x {cart.quantity}
          {appliedDiscount > 0 && (
            <span className="ml-1 text-green-600">({(appliedDiscount * 100).toFixed(0)}% 할인 적용)</span>
          )}
        </span>
      </div>
      <div>
        <button
          onClick={onDecreaseQuantity}
          className="mr-1 rounded bg-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-400"
        >
          -
        </button>
        <button
          onClick={onIncreaseQuantity}
          className="mr-1 rounded bg-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-400"
        >
          +
        </button>
        <button onClick={onRemoveCart} className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600">
          삭제
        </button>
      </div>
    </div>
  );
};
