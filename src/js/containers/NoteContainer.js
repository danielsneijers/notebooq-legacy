import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSelectedNote } from 'selectors/noteSelectors'
import * as NoteActions from 'actions/note'
import * as ViewActions from 'actions/view'
import Note from 'components/Note'

export function mapStateToProps (state) {
  return {
    note: getSelectedNote(state),
    showMarkdown: state.view.markdown
  }
}

export function mapDispatchToProps (dispatch) {
  const actions = {
    ...NoteActions,
    ...ViewActions
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
