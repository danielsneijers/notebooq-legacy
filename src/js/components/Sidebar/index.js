import React, { PropTypes } from 'react'
import List from 'components/List'
import ListItemContainer from 'containers/ListItemContainer'

import CSS from './Sidebar.css'

const Sidebar = ({ list }) => {
  const folders = Object.keys(list).filter((folderName) => folderName !== 'Default')
  const renderedFolders = folders.map((folderName) => {
    return (
      <List key={`${folderName}List`} notes={list[folderName]}>
        <ListItemContainer key={`${folderName}ListItem`} folder={folderName} />
      </List>
    )
  })

  return (
    <div className={CSS.Sidebar}>
      <List notes={list.Default} />
      {renderedFolders}
    </div>
  )
}

Sidebar.propTypes = {
  list: PropTypes.object.isRequired
}

export default Sidebar
