import DetailPage from '../pages/DetailPage';
import PaymentPage from '../pages/PaymentPage';
import ProductPage from '../pages/ProductPage';

export const routes = [
  {
    path: '/products',
    page: ProductPage,
  },
  {
    path: '/detail',
    page: DetailPage,
  },
  {
    path: '/payment',
    page: PaymentPage,
  },
];
