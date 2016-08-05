import { expect } from 'chai'
import { mapStateToProps, mapDispatchToProps } from '../InputContainer'

const dispatch = () => {}
const mockState = {
  someProperty: 'someValue',
  note: {
    title: 'Nice title bro'
  }
}

describe('containers > InputContainer', () => {
  it('adds the correct state to props', () => {
    const expectedResult = { title: 'Nice title bro' }

    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })

  it('responds to the correct actions', () => {
    expect(mapDispatchToProps(dispatch)).to.respondTo('saveTitle')
  })
})
