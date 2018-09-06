const initialState = {
  movieList: [],
  page: 0,
};

export default (state = initialState, action) => {
  let addMovie;
  if (action && action.payload && action.payload.data) {
    addMovie = state.movieList.concat(action.payload.data);
  }
  switch (action.type) {
    case 'movie':
      return {
        movieList: addMovie,
        page: action.payload.page,
      };
    default:
      return state;
  }
};
