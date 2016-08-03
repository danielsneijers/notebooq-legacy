import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../AppContainer'

describe('containers > AppContainer', () => {
  it('renders its children', () => {
    const wrapper = shallow(
      <App>
        <h1>This is the root component</h1>
      </App>
    )

    expect(wrapper.contains(<h1>This is the root component</h1>)).to.equal(true)
  })
})
