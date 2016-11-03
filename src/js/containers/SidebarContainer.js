import { connect } from 'react-redux'
import { getNotesSortedByDate } from 'selectors/noteSelectors'
import Sidebar from 'components/Sidebar'

export function mapStateToProps (state) {
  return { notes: getNotesSortedByDate(state) }
}

export default connect(mapStateToProps)(Sidebar)
