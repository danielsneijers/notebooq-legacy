import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteBodyActions from 'actions/noteBody'
import NoteBody from 'components/NoteBody'

export function mapStateToProps (state) {
  return {
    copy: state.noteBody.copy
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NoteBodyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBody)
