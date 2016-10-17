import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from 'test/fixtures'
import Note from '../Note'
import NoteTitle from 'components/NoteTitle'
import NoteBody from 'components/NoteBody'
import NoteBodyHtml from 'components/NoteBodyHtml'
import CSS from '../Note/Note.css'

describe('components > Note', () => {
  it('renders a title and body when a note is passed', () => {
    const onSaveNote = spy()
    const wrapper = shallow(<Note note={mockNote} saveNote={onSaveNote} />)

    expect(wrapper.hasClass(CSS.Note)).to.be.true
    expect(wrapper.containsAllMatchingElements([
      <NoteTitle title={mockNote.title} />,
      <NoteBody body={mockNote.body} />
    ])).to.be.true

    wrapper.setProps({ showMarkdown: false })
    expect(wrapper.containsAllMatchingElements([
      <NoteTitle />,
      <NoteBodyHtml />
    ])).to.be.true
  })

  it('saves the note when onTitleChange is called', () => {
    const onSaveNote = spy()
    const wrapper = shallow(<Note note={mockNote} saveNote={onSaveNote} />)
    const event = { currentTarget: { value: 'nice change' } }
    const expectedArgument = {
      ...mockNote,
      title: event.currentTarget.value
    }

    expect(onSaveNote.called).to.be.false

    wrapper.instance().handleTitleChange(event)

    expect(onSaveNote.calledOnce).to.be.true
    expect(onSaveNote.calledWith(expectedArgument)).to.be.true
  })

  it('saves the note when onCopyChange is called', () => {
    const onSaveNote = spy()
    const wrapper = shallow(<Note note={mockNote} saveNote={onSaveNote} />)
    const event = { currentTarget: { value: 'nice change' } }
    const expectedArgument = {
      ...mockNote,
      body: event.currentTarget.value
    }

    expect(onSaveNote.called).to.be.false

    wrapper.instance().handleCopyChange(event)

    expect(onSaveNote.calledOnce).to.be.true
    expect(onSaveNote.calledWith(expectedArgument)).to.be.true
  })
})
