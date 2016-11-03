import React, { PropTypes } from 'react'
import Moment from 'moment'
import classNames from 'classnames'
import striptags from 'striptags'
import RenderMarkdown from 'instances/renderer'
import CSS from './ListItem.css'

const ListItem = ({ note, handleClick }) => {
  const title = note.title || 'Untitled note...'
  const exactDate = Moment(note.updated_at * 1000).format()
  const excerpt = striptags(RenderMarkdown(note.body.substring(0, 65)))
  const description = excerpt.length > 60 ? `${excerpt}...` : excerpt
  const relativeDate = Moment(note.updated_at * 1000).fromNow()
    .replace('a few seconds ago', 'now')
    .replace('a minute ago', 'just now')
    .replace('an hour', '1h')
    .replace('a day', '1d')
    .replace(' minutes', 'm')
    .replace(' seconds', 's')
    .replace(' hours', 'h')
    .replace(' days', 'd')
  const styles = classNames([CSS.listItem], {
    [CSS.faded]: !note.title,
    [CSS.selected]: note.selected
  })

  return (
    <li className={styles} onClick={handleClick}>
      <strong className={CSS.title}>{title}</strong>
      <time className={CSS.date} dateTime={exactDate}>
        {relativeDate}
      </time>
      <small className={CSS.description}>{description}</small>
    </li>
  )
}

ListItem.propTypes = {
  note: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ListItem
