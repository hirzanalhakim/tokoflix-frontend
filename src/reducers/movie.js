const initial_state = {
  movieList: [],
  page: 0
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case 'movie':
      const addMovie = state.movieList.concat(action.payload.data);
      return {
        movieList: addMovie,
        page: action.payload.page
      }
    default:
      return state;
  }

}