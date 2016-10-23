import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { spy, useFakeTimers } from 'sinon'
import { mockNote } from 'test/fixtures'
import NoteTitle from '../NoteTitle'
import CSS from '../NoteTitle/NoteTitle.css'

describe('components > NoteTitle', () => {
  let clock

  beforeEach(() => {
    clock = useFakeTimers()
  })

  it('renders an empty input when no title is passed', () => {
    const wrapper = shallow(<NoteTitle />)

    expect(wrapper.type()).to.equal('input')
    expect(wrapper.text()).to.equal('')
    expect(wrapper.prop('value')).to.equal(undefined)
    expect(wrapper.prop('placeholder')).to.equal('Untitled note...')
    expect(wrapper.hasClass(CSS.noteTitle)).to.be.true
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

  it('will auto focus after 200ms when autofocus prop is true', () => {
    const wrapper = mount(<NoteTitle />)
    const input = wrapper.find('input')

    expect(input.node === document.activeElement).to.be.false

    wrapper.instance().componentWillReceiveProps({ autoFocus: true })

    expect(input.node === document.activeElement).to.be.false

    clock.tick(200)

    expect(input.node === document.activeElement).to.be.true
  })

  it('will not auto focus after 200ms when autofocus prop is false', () => {
    const wrapper = mount(<NoteTitle />)
    const input = wrapper.find('input')

    expect(input.node === document.activeElement).to.be.false

    wrapper.instance().componentWillReceiveProps({ autoFocus: false })

    expect(input.node === document.activeElement).to.be.false

    clock.tick(200)

    expect(input.node === document.activeElement).to.be.false
  })

  it('will clear the timeout when its unmounted', () => {
    spy(global, 'clearTimeout')

    const wrapper = mount(<NoteTitle />)

    wrapper.instance()._focusTimeout = spy()

    wrapper.unmount()

    expect(global.clearTimeout.calledOnce).to.be.true
  })
})
