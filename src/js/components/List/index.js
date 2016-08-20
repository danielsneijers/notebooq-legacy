import React, { PropTypes } from 'react'
import ListFolder from 'components/ListFolder'
import ListItem from 'components/ListItem'

import CSS from './List.css'

const List = ({ list }) => {
  const folders = Object.keys(list)
  const renderedRootFolderNotes = list.Default.map((note) => <ListItem key={note.title} note={note} />)
  const renderedFolders = folders
    .filter((folderName) => folderName !== 'Default')
    .map((folderName) => <ListFolder key={folderName} folderName={folderName} notes={list[folderName]} />)

  return (
    <div className={CSS.List}>
      {renderedFolders}
      {renderedRootFolderNotes}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.object.isRequired
}

export default List
