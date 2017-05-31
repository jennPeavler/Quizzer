import { connect } from 'react-redux'

import { QuizDisplay } from './QuizDisplay'

const mapStateToProps = (state) => {
  return { quizzes: state.quizzesReducer }
}

export default connect(mapStateToProps)(QuizDisplay)
