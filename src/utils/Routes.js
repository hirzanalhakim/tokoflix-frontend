import Home from '../containers/Home';
import Movie from '../containers/Movie';
import NotFound from '../containers/NotFound';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/:movie/:id',
    exact: true,
    component: Movie,
  },
  {
    component: NotFound,
  },
];

export default Routes;
