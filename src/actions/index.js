export const addUser = () => {
  return {
    type: 'ADD_USER'
  }
}

export const fetchQuizzes = (response) => {
  return {
    type: 'FETCH_QUIZZES',
    payload: response
  }
}
