import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from 'test/fixtures'
import ListItem from '../ListItem'
import CSS from '../ListItem/ListItem.css'

describe('components > ListItem', () => {
  it('renders a list item with the title of the note', () => {
    const handleClick = spy()
    const wrapper = shallow(
      <ListItem note={mockNote} handleClick={handleClick} />
    )

    expect(wrapper.type()).to.equal('li')
    expect(wrapper.hasClass(CSS.ListItem)).to.be.true
    expect(wrapper.text()).to.equal(mockNote.title)
  })

  it('calls handleClick when clicked', () => {
    const handleClick = spy()
    const wrapper = shallow(
      <ListItem note={mockNote} handleClick={handleClick} />
    )

    expect(handleClick.called).to.be.false

    wrapper.simulate('click')

    expect(handleClick.calledOnce).to.be.true
  })
})
