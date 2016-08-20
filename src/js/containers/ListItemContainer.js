// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as NoteActions from 'actions/note'
import ListItem from 'components/ListItem'

export function mapStateToProps (state) {
  return {}
}

// export function mapDispatchToProps (dispatch) {
//   return bindActionCreators(NoteActions, dispatch)
// }

export default connect(mapStateToProps)(ListItem)
