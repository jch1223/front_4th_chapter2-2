import { useState } from 'react';

import { AdminPage } from './components/AdminPage';
import { CartPage } from './components/CartPage';
import { INITIAL_COUPONS, INITIAL_PRODUCTS, useCoupons, useProducts } from './hooks';

const App = () => {
  const { products, updateProduct, addProduct } = useProducts(INITIAL_PRODUCTS);
  const { coupons, addCoupon } = useCoupons(INITIAL_COUPONS);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">쇼핑몰 관리 시스템</h1>
          <button
            onClick={() => setIsAdmin(!isAdmin)}
            className="rounded bg-white px-4 py-2 text-blue-600 hover:bg-blue-100"
          >
            {isAdmin ? '장바구니 페이지로' : '관리자 페이지로'}
          </button>
        </div>
      </nav>
      <main className="container mx-auto mt-6">
        {isAdmin ? (
          <AdminPage
            products={products}
            coupons={coupons}
            onProductUpdate={updateProduct}
            onProductAdd={addProduct}
            onCouponAdd={addCoupon}
          />
        ) : (
          <CartPage products={products} coupons={coupons} />
        )}
      </main>
    </div>
  );
};

export default App;
