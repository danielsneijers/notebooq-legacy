import React, { PropTypes } from 'react'
import ListItemContainer from 'containers/ListItemContainer'
import CSS from './List.css'

const List = ({ notes }) => {
  const renderedNotes = notes
    .map((note) => <ListItemContainer key={note.id} note={note} />)

  return (
    <ul className={CSS.List}>
      {renderedNotes}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.node,
  notes: PropTypes.array.isRequired
}

export default List
