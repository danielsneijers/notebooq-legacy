import { connect } from 'react-redux'
import { selectNote } from 'actions/notes'
import ListItem from 'components/ListItem'

const mapStateToProps = (state, ownProps) => {
  return {...ownProps}
}

export function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleClick: () => { dispatch(selectNote(ownProps.note.path)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
