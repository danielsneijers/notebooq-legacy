import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from 'test/fixtures'
import { newEmptyNote } from 'utils/notes'
import ListItem from '../ListItem'
import CSS from '../ListItem/ListItem.css'

describe('components > ListItem', () => {
  const listItemProps = {
    handleClick: spy()
  }

  afterEach(() => {
    listItemProps.handleClick.reset()
  })

  it('renders a list item with the title of the note', () => {
    const wrapper = shallow(
      <ListItem note={mockNote} {...listItemProps} />
    )
    const title = wrapper.find('strong')

    expect(wrapper.type()).to.equal('li')
    expect(wrapper.hasClass(CSS.listItem)).to.be.true
    expect(title.text()).to.equal(mockNote.title)
  })

  it('renders a list item with a placeholder title if the note.title is empty', () => {
    const emptyNote = newEmptyNote(1)
    const wrapper = shallow(
      <ListItem note={emptyNote} {...listItemProps} />
    )
    const title = wrapper.find('strong')

    expect(wrapper.type()).to.equal('li')
    expect(wrapper.hasClass(CSS.listItem)).to.be.true
    expect(title.text()).to.equal('Untitled note...')
  })

  it('renders the copy of the note when copy is short', () => {
    const wrapper = shallow(
      <ListItem note={mockNote} {...listItemProps} />
    )
    const copy = wrapper.find('small')

    expect(copy.text()).to.equal(`${mockNote.body}\n`)
  })

  it('renders the excerpt of the note when copy is too long', () => {
    const longCopyNote = {
      ...mockNote,
      body: 'In viverra tellus sed est. In viverra tellus sed est. In viverra tellus sed est.'
    }
    const wrapper = shallow(
      <ListItem note={longCopyNote} {...listItemProps} />
    )
    const copy = wrapper.find('small')
    const expectedCopy = `${longCopyNote.body.substring(0, 65)}\n...`

    expect(copy.text()).to.equal(expectedCopy)
  })

  it('calls handleClick when clicked', () => {
    const wrapper = shallow(
      <ListItem note={mockNote} {...listItemProps} />
    )

    expect(listItemProps.handleClick.called).to.be.false

    wrapper.simulate('click')

    expect(listItemProps.handleClick.calledOnce).to.be.true
  })
})
