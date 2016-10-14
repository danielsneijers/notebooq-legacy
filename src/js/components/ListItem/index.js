import React, { PropTypes } from 'react'
import CSS from './ListItem.css'

const ListItem = ({ title, handleClick }) =>
  <li className={CSS.ListItem} onClick={handleClick}>{title}</li>

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ListItem
