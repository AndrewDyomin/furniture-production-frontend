import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';
import { Loading } from './Loading/Loading';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));
const OrdersPage = lazy(() => import('../pages/Orders'));
const ProductsPage = lazy(() => import('../pages/Products'));
const OrderDetailsPage = lazy(() => import('../pages/OrderDetails'));
const MyRoomPage = lazy(() => import('../pages/MyRoom'));
const ProductDetailsPage = lazy(() => import('../pages/ProductDetails'));
const MyDruftsPage = lazy(() => import('../pages/Drufts'));
const DruftDetailsPage = lazy(() => import('../pages/DruftDetails'));
const ArchivePage = lazy(() => import('../pages/Archive'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            }
          />
          <Route
            path="/orders/"
            element={
              <PrivateRoute redirectTo="/login" component={<OrdersPage />} />
            }
          />
          <Route
            path="/orders/:orderId"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<OrderDetailsPage />}
              />
            }
          />
          <Route
            path="/archive/"
            element={
              <PrivateRoute redirectTo="/login" component={<ArchivePage />} />
            }
          />
          <Route
            path="/archive/:orderId"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<OrderDetailsPage />}
              />
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:filter" element={<ProductsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route
            path="/room"
            element={
              <PrivateRoute redirectTo="/login" component={<MyRoomPage />} />
            }
          />
          <Route
            path="/drufts"
            element={
              <PrivateRoute redirectTo="/login" component={<MyDruftsPage />} />
            }
          />
          <Route
            path="/drufts/:druftId"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<DruftDetailsPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
