import React, { PropTypes } from 'react'
import ListItem from 'components/ListItem'

import CSS from './List.css'

const List = ({ notes }) => {
  const ListWithNotes = notes.map((note) => <ListItem key={note.title} note={note} />)

  return <div className={CSS.List}>{ListWithNotes}</div>
}

List.propTypes = {
  notes: PropTypes.array.isRequired
}

export default List
