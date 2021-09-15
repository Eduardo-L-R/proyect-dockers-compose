import Home from './views/home';

const routes = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Home />,
  }
];

export default routes;