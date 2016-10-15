import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { mockNotesList } from 'test/fixtures'
import List from '../List'
import Sidebar from '../Sidebar'

describe('components > Sidebar', () => {
  it('renders a list of the notes that are passed', () => {
    const wrapper = shallow(<Sidebar notes={mockNotesList} />)

    expect(wrapper.type()).to.equal('div')
    expect(wrapper.containsMatchingElement(<List />)).to.be.true
  })
})
