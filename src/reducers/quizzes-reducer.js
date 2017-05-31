const quizzes = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_QUIZZES':
      return action.payload
    default:
      return state
  }
}

export default quizzes
