
export const fetchQuizzes = (response) => {
  return {
    type: 'FETCH_QUIZZES',
    payload: response
  }
}

export const addQuestion = (response) => {
  return {
    type: 'ADD_QUESTION',
    payload: response
  }
}
