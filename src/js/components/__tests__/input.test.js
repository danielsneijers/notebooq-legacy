import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Input from '../Input'

let saveTitle

beforeEach(() => {
  saveTitle = spy()
})

describe('components > Input', () => {
  it('renders an empty input when no props are passed', () => {
    const wrapper = shallow(<Input saveTitle={saveTitle} />)

    expect(wrapper.prop('defaultValue')).to.equal(undefined)
    expect(wrapper.html()).to.equal('<input name="Title" placeholder="Untitled note..."/>')
  })

  it('renders a prefilled input when title prop is passed', () => {
    const wrapper = shallow(<Input title={'New note'} saveTitle={saveTitle} />)

    expect(wrapper.prop('defaultValue')).to.equal('New note')
    expect(wrapper.html()).to.equal('<input name="Title" placeholder="Untitled note..." value="New note"/>')
  })

  it('saves the title when input value is changed', () => {
    const wrapper = shallow(<Input saveTitle={saveTitle} />)

    wrapper.simulate('change')
    expect(saveTitle.calledOnce).to.equal(true)

    wrapper.simulate('change')
    expect(saveTitle.calledOnce).to.equal(false)
  })
})
