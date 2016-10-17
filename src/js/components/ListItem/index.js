import React, { PropTypes } from 'react'
import CSS from './ListItem.css'

const ListItem = ({ note, handleClick }) =>
  <li className={CSS.ListItem} onClick={handleClick}>{note.title}</li>

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ListItem
