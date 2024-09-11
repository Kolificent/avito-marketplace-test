import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './reset.css';
import App from './app/App.tsx';
import store from './store/store.tsx';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import AdvertisementsPage from './pages/AdvertisementsPage.tsx';
import OrdersPage from './pages/OrdersPage.tsx';
import AdvertisementPage from './pages/AdvertisementPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/advertisements" replace />,
      },
      { path: 'advertisements', element: <AdvertisementsPage /> },
      { path: 'advertisement/:id', element: <AdvertisementPage /> },
      { path: 'orders', element: <OrdersPage /> },
    ],
    // errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
