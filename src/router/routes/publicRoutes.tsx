import Login from '../../views/auth/Login';
import Register from '../../views/auth/Register';

export const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];
