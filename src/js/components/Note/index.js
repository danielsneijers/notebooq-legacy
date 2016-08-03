import React from 'react'
import InputContainer from 'containers/InputContainer'

import CSS from './Note.css'

const MarkdownView = (props) => {
  return (
    <div className={CSS.Note}>
      <InputContainer />
      <textarea
        className={CSS.Textarea}
      />
    </div>
  )
}

export default MarkdownView
