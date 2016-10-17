import React, { PropTypes } from 'react'

const NoteBodyHtml = ({ body, ...rest }) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: body}}
      {...rest}
    />
  )
}

NoteBodyHtml.propTypes = {
  body: PropTypes.string.isRequired
}

export default NoteBodyHtml
