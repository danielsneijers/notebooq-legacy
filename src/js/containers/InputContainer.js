import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as InputActions from 'actions/input'
import Input from 'components/Input'

function mapStateToProps (state) {
  return {
    title: state.title
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(InputActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
