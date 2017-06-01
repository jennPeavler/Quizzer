const quizzes = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_QUIZZES':
      return action.payload
    case 'ADD_QUESTION':
      console.log(action.payload);
      return action.payload
    default:
      return state
  }
}

export default quizzes
