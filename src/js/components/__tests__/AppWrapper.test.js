import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AppWrapper from '../AppWrapper'

describe('components > AppWrapper', () => {
  it('renders its children', () => {
    const wrapper = shallow(
      <AppWrapper>
        <h1>This is the root component</h1>
      </AppWrapper>
    )

    expect(wrapper.contains(<h1>This is the root component</h1>)).to.equal(true)
  })
})
