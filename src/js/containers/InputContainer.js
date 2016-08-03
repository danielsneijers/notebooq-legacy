import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as InputActions from 'actions/input'
import Input from 'components/Input'

export function mapStateToProps (state) {
  return {
    title: state.input.title
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(InputActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
