import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteActions from 'actions/note'
import NoteBody from 'components/NoteBody'

export function mapStateToProps (state) {
  return {
    copy: state.note.copy
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NoteActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteBody)
