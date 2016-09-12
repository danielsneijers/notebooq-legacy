import React, { PropTypes } from 'react'
import List from 'components/List'
import ListItemContainer from 'containers/ListItemContainer'

import CSS from './Sidebar.css'

const Sidebar = ({ notes }) => {
  const folders = Object.keys(notes).filter((folderName) => folderName !== 'Default')
  console.log('%c folders ', 'background-color:#2ecc71; color: white; font-weight: bold; padding: 4px 0;')
  console.log(folders)
  const renderedFolders = folders.map((folderName) => {
    console.log('%c notes ', 'background-color:#f1c40f; color: white; font-weight: bold; padding: 4px 0;')
    console.log(folderName)
    console.log(notes[folderName])
    return (
      <List key={`${folderName}List`} notes={notes[folderName]}>
        <ListItemContainer key={`${folderName}ListItem`} folder={folderName} />
      </List>
    )
  })

  return (
    <div className={CSS.Sidebar}>
      <List notes={notes.Default} />
      {renderedFolders}
    </div>
  )
}

Sidebar.propTypes = {
  notes: PropTypes.object.isRequired
}

export default Sidebar
