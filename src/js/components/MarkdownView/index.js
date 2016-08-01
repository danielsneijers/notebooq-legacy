import React from 'react'
import InputContainer from 'containers/InputContainer'

import CSS from './MarkdownView.css'

const MarkdownView = (props) => {
  return (
    <div>
      <InputContainer />
      <textarea
        className={CSS.textarea}
      />
    </div>
  )
}

export default MarkdownView
