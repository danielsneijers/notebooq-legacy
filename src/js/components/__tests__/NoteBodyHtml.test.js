import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NoteBodyHtml from '../NoteBodyHtml'

describe('components > NoteBodyHtml', () => {
  it('renders an empty textarea when no children copy is passed', () => {
    const wrapper = shallow(<NoteBodyHtml body={''} />)

    expect(wrapper.type()).to.equal('div')
    expect(wrapper.prop('children')).to.equal(undefined)
  })

  it('renders an empty textarea when no children copy is passed', () => {
    const body = `<h1>Title</h1><p>Paragraph</p>`
    const wrapper = shallow(<NoteBodyHtml body={body} />)
    const expectedResult = `<div>${body}</div>`

    expect(wrapper.html()).to.equal(expectedResult)
  })
})
