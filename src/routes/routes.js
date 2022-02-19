import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/index.jsx'
import User from '../pages/Home/putUser/index';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <User />,
      },
    ],
  },
];
