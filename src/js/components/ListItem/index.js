import React, { PropTypes } from 'react'
import classNames from 'classnames'
import CSS from './ListItem.css'

const ListItem = ({ note, handleClick }) => {
  const title = note.title || 'Untitled note...'
  const styles = classNames([CSS.ListItem], {
    [CSS.Faded]: !note.title
  })

  return <li className={styles} onClick={handleClick}>{title}</li>
}

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ListItem
