import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { mockNotesList } from '../../__tests__/fixtures'
import List from '../List'
import ListItemContainer from '../../containers/ListItemContainer'
import CSS from '../List/List.css'

describe('components > List', () => {
  it('renders a list of notes when notes are passed as props', () => {
    const wrapper = shallow(<List notes={mockNotesList} />)

    console.log()

    expect(wrapper.type()).to.equal('ul')
    expect(wrapper.hasClass(CSS.List)).to.be.true
    expect(wrapper.props().children.length).to.equal(mockNotesList.length)
    expect(wrapper.containsMatchingElement(<ListItemContainer />)).to.be.true
  })
})
