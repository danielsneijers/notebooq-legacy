import React from 'react'
import SidebarContainer from 'containers/SidebarContainer'
import InputContainer from 'containers/InputContainer'
import NoteBodyContainer from 'containers/NoteBodyContainer'

import CSS from './Note.css'

const Note = (props) => {
  return (
    <div className={CSS.Note}>
      <SidebarContainer />
      <InputContainer />
      <NoteBodyContainer />
    </div>
  )
}

export default Note
