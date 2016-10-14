import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import NoteTitle from '../NoteTitle'

let saveTitle

beforeEach(() => {
  saveTitle = spy()
})

describe('components > NoteTitle', () => {
  // it('renders an empty input when no props are passed', () => {
  //   const wrapper = shallow(<NoteTitle saveTitle={saveTitle} />)
  //
  //   expect(wrapper.prop('defaultValue')).to.equal(undefined)
  //   expect(wrapper.prop('value')).to.equal(undefined)
  //   expect(wrapper.html()).to.equal('<input name="Title" placeholder="Untitled note..."/>')
  // })
  //
  // it('renders a prefilled input when title prop is passed', () => {
  //   const title = 'New note'
  //   const wrapper = shallow(<NoteTitle title={title} saveTitle={saveTitle} />)
  //
  //   expect(wrapper.prop('value')).to.equal(title)
  //   expect(wrapper.html()).to.equal(`<input name="Title" value="${title}" placeholder="Untitled note..."/>`)
  // })
  //
  // it('saves the title when input value is changed', () => {
  //   const wrapper = shallow(<NoteTitle saveTitle={saveTitle} />)
  //
  //   wrapper.simulate('change')
  //   expect(saveTitle.calledOnce).to.equal(true)
  //
  //   wrapper.simulate('change')
  //   expect(saveTitle.calledOnce).to.equal(false)
  // })
})
