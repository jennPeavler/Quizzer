import { connect } from 'react-redux'

import { fetchQuizzes } from '../../actions/index'
import App from './App'

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetch: payload => {
      dispatch(fetchQuizzes(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(App) 
