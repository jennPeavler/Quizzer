import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ApiAdders from './ApiAdders'

const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchtoProps)(ApiAdders)


//finish connecting to redux store and make sure change quiz
//update dom
