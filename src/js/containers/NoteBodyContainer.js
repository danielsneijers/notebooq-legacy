import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActiveNoteActions from 'actions/activeNote'
import NoteBody from 'components/NoteBody'

export function mapStateToProps (state) {
  return {
    copy: state.activeNote.copy
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActiveNoteActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBody)
