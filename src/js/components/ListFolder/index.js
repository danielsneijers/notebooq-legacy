import React, { PropTypes } from 'react'
import ListItem from 'components/ListItem'

import CSS from './ListFolder.css'

const ListFolder = ({ folderName, notes }) => {
  const folderNotes = notes.map((note) => <ListItem key={note.title} note={note} />)

  return (
    <div>
      <div className={CSS.ListFolder}>{folderName}</div>
      {folderNotes}
    </div>
  )
}

ListFolder.propTypes = {
  folderName: PropTypes.string.isRequired,
  notes: PropTypes.array
}

export default ListFolder
