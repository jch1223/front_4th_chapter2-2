import { useState } from 'react';

import type { Product } from '../../types';

export const useProducts = (initialProducts: Product[]) => {
  return { products: [], updateProduct: () => undefined, addProduct: () => undefined };
};
