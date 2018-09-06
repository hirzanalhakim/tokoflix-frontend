const addMovieList = (data, page) => ({
  type: 'movie',
  payload: {
    data,
    page,
  },
});

export default addMovieList;
