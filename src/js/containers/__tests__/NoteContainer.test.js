import { expect } from 'chai'
import { mapStateToProps } from '../NoteContainer'

const mockState = {
  someProperty: 'someValue',
  input: {
    title: 'Nice title bro'
  }
}

describe('containers > NoteContainer', () => {
  it('adds the correct state to props', () => {
    const expectedResult = {}

    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })
})
