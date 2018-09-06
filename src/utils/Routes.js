import Home from '../containers/Home';
import Movie from '../containers/Movie';
import NotFound from '../containers/NotFound';
// import Login from '../containers/Login';
// import MyCollection from '../containers/MyCollection';
// import Profile from '../containers/Profile';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/:movie/:id',
    exact: true,
    component: Movie
  },
  {
    component: NotFound
  }
  // {
  //   path: '/login',
  //   exact: true,
  //   component: Login
  // },
  // {
  //   path: '/friends',
  //   exact: true,
  //   component: Friends
  // },
  // {
  //   path: '/mycollection',
  //   exact: true,
  //   component: MyCollection
  // },
  // {
  //   path: '/profile',
  //   exact: true,
  //   component: Profile
  // },
]

export default Routes;