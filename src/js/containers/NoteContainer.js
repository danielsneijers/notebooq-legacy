import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSelectedNote } from 'utils/notes'
import * as NotesActions from 'actions/note'
import Note from 'components/Note'

export function mapStateToProps (state) {
  return {
    note: getSelectedNote(state.notes)
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NotesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
