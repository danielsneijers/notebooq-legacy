import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActiveNoteActions from 'actions/activeNote'
import Input from 'components/Input'

export function mapStateToProps (state) {
  return {
    title: state.activeNote.title
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActiveNoteActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
