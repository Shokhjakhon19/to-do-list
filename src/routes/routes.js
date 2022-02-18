import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/index.jsx'


export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];
