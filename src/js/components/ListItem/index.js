import React, { PropTypes } from 'react'
import classNames from 'classnames'

import CSS from './ListItem.css'

const ListItem = ({ note, folder, handleClick }) => {
  const title = folder || note.title
  const classes = classNames(CSS.ListItem, {
    [CSS.Folder]: !!folder
  })

  return <li className={classes} onClick={handleClick}>{title}</li>
}

ListItem.propTypes = {
  note: PropTypes.object,
  folder: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

export default ListItem
