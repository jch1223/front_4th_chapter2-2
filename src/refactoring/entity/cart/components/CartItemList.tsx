import type { CartItemProps } from '@/refactoring/entity/cart/components/CartItem';
import { CartItem } from '@/refactoring/entity/cart/components/CartItem';
import type { CartItem as CartItemType } from '@/types';

interface CartItemListProps {
  cart: CartItemType[];
  onQuantityUpdate: CartItemProps['onQuantityUpdate'];
  onCartRemove: CartItemProps['onCartRemove'];
}

export const CartItemList = ({ cart, onQuantityUpdate, onCartRemove }: CartItemListProps) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">장바구니 내역</h2>

      <div className="space-y-2">
        {cart.map(item => {
          return (
            <CartItem
              key={item.product.id}
              cart={item}
              onQuantityUpdate={onQuantityUpdate}
              onCartRemove={onCartRemove}
            />
          );
        })}
      </div>
    </div>
  );
};
