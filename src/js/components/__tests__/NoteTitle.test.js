import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from 'test/fixtures'
import NoteTitle from '../NoteTitle'
import CSS from '../NoteTitle/NoteTitle.css'

describe('components > NoteTitle', () => {
  it('renders an empty input when no title is passed', () => {
    const wrapper = shallow(<NoteTitle />)

    expect(wrapper.type()).to.equal('input')
    expect(wrapper.text()).to.equal('')
    expect(wrapper.prop('value')).to.equal(undefined)
    expect(wrapper.prop('placeholder')).to.equal('Untitled note...')
    expect(wrapper.hasClass(CSS.NoteTitle)).to.be.true
  })

  it('renders a prefilled input when copy prop is passed', () => {
    const wrapper = shallow(<NoteTitle title={mockNote.title} />)

    expect(wrapper.prop('value')).to.equal(mockNote.title)
  })

  it('saves the title when input value is changed', () => {
    const saveTitle = spy()
    const wrapper = shallow(<NoteTitle onChange={saveTitle} />)

    expect(saveTitle.called).to.be.false
    wrapper.simulate('change')
    expect(saveTitle.calledOnce).to.equal(true)
  })
})
