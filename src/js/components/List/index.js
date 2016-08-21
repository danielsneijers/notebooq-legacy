import React, { PropTypes } from 'react'
import ListItem from 'components/ListItem'

import CSS from './List.css'

const List = ({ children, notes }) => {
  const renderedNotes = notes.map((note) => <ListItem key={note.title} note={note} />)

  return (
    <ul className={CSS.List}>
      {children}
      {renderedNotes}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.node,
  notes: PropTypes.array.isRequired
}

export default List
