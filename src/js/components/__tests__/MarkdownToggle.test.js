import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import MarkdownToggle from '../MarkdownToggle'

describe('components > MarkdownToggle', () => {
  it('renders a button element with the provided props', () => {
    const wrapper = shallow(<MarkdownToggle>Lick me</MarkdownToggle>)

    expect(wrapper.type()).to.equal('button')
    expect(wrapper.text()).to.equal('Lick me')
  })

  it('handles even callbacks when provided', () => {
    const handleClick = spy()
    const wrapper = shallow(
      <MarkdownToggle onClick={handleClick} />
    )

    expect(handleClick.called).to.be.false

    wrapper.simulate('click')

    expect(handleClick.calledOnce).to.be.true
  })
})
