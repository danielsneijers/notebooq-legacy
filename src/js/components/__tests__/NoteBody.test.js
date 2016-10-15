import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from '../../__tests__/fixtures'
import TextareaAutosize from 'react-autosize-textarea'
import NoteBody from '../NoteBody'
import CSS from '../NoteBody/NoteBody.css'

describe('components > NoteBody', () => {
  it('renders an empty textarea when no children copy is passed', () => {
    const wrapper = shallow(<NoteBody />)

    expect(wrapper.type()).to.equal(TextareaAutosize)
    expect(wrapper.prop('value')).to.equal(undefined)
    expect(wrapper.hasClass(CSS.Textarea)).to.be.true
  })

  it('renders a prefilled textarea when copy prop is passed', () => {
    const wrapper = shallow(<NoteBody body={mockNote.body} />)

    expect(wrapper.prop('value')).to.equal(mockNote.body)
  })

  it('saves the title when input value is changed', () => {
    const saveCopy = spy()
    const wrapper = shallow(<NoteBody onChange={saveCopy} />)

    expect(saveCopy.called).to.be.false
    wrapper.simulate('change')
    expect(saveCopy.calledOnce).to.equal(true)
  })
})
