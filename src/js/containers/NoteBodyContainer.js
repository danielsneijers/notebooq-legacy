import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSelectedNoteFromTree } from 'utils/notes'
import * as NotesActions from 'actions/notes'
import NoteBody from 'components/NoteBody'

export function mapStateToProps (state) {
  return {
    note: getSelectedNoteFromTree(state.notes)
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NotesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBody)
