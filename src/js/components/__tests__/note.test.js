import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Note from '../Note'
import NoteTitle from 'components/NoteTitle'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

describe('components > Note', () => {
  // it('renders an empty input when no props are passed', () => {
  //   const wrapper = shallow(<Note />, { context: { store: mockStore() } })
  //
  //   expect(wrapper.containsMatchingElement(
  //     <NoteTitle />
  //   )).to.equal(true)
  // })
})
