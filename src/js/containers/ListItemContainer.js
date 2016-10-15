import { connect } from 'react-redux'
import { selectNote } from 'actions/note'
import ListItem from 'components/ListItem'

export const mapStateToProps = (state, ownProps) => {
  return {...ownProps}
}

export function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleClick: () => { dispatch(selectNote(ownProps.note.id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
