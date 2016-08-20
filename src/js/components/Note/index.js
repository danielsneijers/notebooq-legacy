import React from 'react'
import ListContainer from 'containers/ListContainer'
import InputContainer from 'containers/InputContainer'
import NoteBodyContainer from 'containers/NoteBodyContainer'

import CSS from './Note.css'

const Note = (props) => {
  return (
    <div className={CSS.Note}>
      <ListContainer />
      <InputContainer />
      <NoteBodyContainer />
    </div>
  )
}

export default Note
