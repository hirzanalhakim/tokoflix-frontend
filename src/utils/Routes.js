import Home from '../containers/Home';
import MovieDetail from '../containers/MovieDetail';
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
    component: MovieDetail,
  },
  {
    component: NotFound,
  },
];

export default Routes;
