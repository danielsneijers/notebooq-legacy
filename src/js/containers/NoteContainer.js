import { connect } from 'react-redux'
import Note from 'components/Note'

export function mapStateToProps (state) {
  return {
    filePath: state.note.path
  }
}

export default connect(mapStateToProps)(Note)
