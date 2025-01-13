import { useState } from 'react';

import type { Coupon } from '../../types';

export const useCoupons = (initialCoupons: Coupon[]) => {
  return { coupons: [], addCoupon: () => undefined };
};
