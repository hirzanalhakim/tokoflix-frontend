const userLogin = (data) => {
  return {
    type: 'user',
    payload: data
  }
}

const addMovieList = (data, page) => {
  return {
    type: 'movie',
    payload: {
      data: data,
      page: page
    }
  }
}

export {
  userLogin,
  addMovieList
}