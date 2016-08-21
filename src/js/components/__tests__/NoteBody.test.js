import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import NoteBody from '../NoteBody'

let saveCopy

beforeEach(() => {
  saveCopy = spy()
})

describe('components > NoteBody', () => {
  it('renders an empty textarea when no children copy is passed', () => {
    const wrapper = shallow(<NoteBody saveCopy={saveCopy} />)

    expect(wrapper.prop('defaultValue')).to.equal(undefined)
    expect(wrapper.html()).to.equal('<textarea name="Copy" rows="1"></textarea>')
  })

  it('renders a prefilled textarea when copy prop is passed', () => {
    const copy = 'Some inspiring text, you should read it'
    const wrapper = shallow(
      <NoteBody saveCopy={saveCopy} copy={copy} />
    )

    expect(wrapper.prop('defaultValue')).to.equal(copy)
    expect(wrapper.html()).to.equal(`<textarea name="Copy" rows="1">${copy}</textarea>`)
  })

  it('saves the title when input value is changed', () => {
    const wrapper = shallow(<NoteBody saveCopy={saveCopy} />)

    wrapper.simulate('change')
    expect(saveCopy.calledOnce).to.equal(true)

    wrapper.simulate('change')
    expect(saveCopy.calledOnce).to.equal(false)
  })
})
