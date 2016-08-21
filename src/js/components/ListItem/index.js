import React, { PropTypes } from 'react'
import classNames from 'classnames'

import CSS from './ListItem.css'

const ListItem = ({ note, folder }) => {
  const title = folder || note.title
  const classes = classNames(CSS.ListItem, {
    [CSS.Folder]: !!folder
  })

  return <li className={classes}>{title}</li>
}

ListItem.propTypes = {
  note: PropTypes.object,
  folder: PropTypes.string
}

export default ListItem
