import React, { PropTypes } from 'react'

import CSS from './ListItem.css'

const ListItem = ({ note }) => {
  return <div className={CSS.ListItem}>{note.title}</div>
}

ListItem.propTypes = {
  note: PropTypes.object.isRequired
}

export default ListItem
