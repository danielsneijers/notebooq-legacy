import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NotesActions from 'actions/notes'
import { getSelectedNoteFromTree } from 'utils/notes'
import Input from 'components/Input'

export function mapStateToProps (state) {
  return {
    note: getSelectedNoteFromTree(state.notes)
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NotesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
