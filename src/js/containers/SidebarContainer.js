import { connect } from 'react-redux'
import { getNotes } from 'selectors/noteSelectors'
import Sidebar from 'components/Sidebar'

export function mapStateToProps (state) {
  return { notes: getNotes(state) }
}

export default connect(mapStateToProps)(Sidebar)
