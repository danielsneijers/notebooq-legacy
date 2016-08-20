// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as NoteActions from 'actions/note'
import List from 'components/List'

export function mapStateToProps (state) {
  return { list: state.list }
}

// export function mapDispatchToProps (dispatch) {
//   return bindActionCreators(NoteActions, dispatch)
// }

export default connect(mapStateToProps)(List)
