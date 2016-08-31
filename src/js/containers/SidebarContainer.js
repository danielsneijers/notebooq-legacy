import { connect } from 'react-redux'
import Sidebar from 'components/Sidebar'

export function mapStateToProps (state) {
  return { list: state.list }
}

export default connect(mapStateToProps)(Sidebar)
