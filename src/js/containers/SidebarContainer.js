import { connect } from 'react-redux'
import Sidebar from 'components/Sidebar'

export function mapStateToProps (state) {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Sidebar)
