import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NoteActions from 'actions/note'
import Input from 'components/Input'

export function mapStateToProps (state) {
  return {
    title: state.note.title
  }
}

export function mapDispatchToProps (dispatch) {
  return bindActionCreators(NoteActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
