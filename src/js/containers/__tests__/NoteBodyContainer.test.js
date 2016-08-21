import { expect } from 'chai'
import { mapStateToProps, mapDispatchToProps } from '../NoteBodyContainer'

const dispatch = () => {}
const mockState = {
  someProperty: 'someValue',
  activeNote: {
    copy: 'Some inspiring text, you should read it'
  }
}

describe('containers > NoteBodyContainer', () => {
  it('adds the correct state to props', () => {
    const expectedResult = { copy: 'Some inspiring text, you should read it' }

    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })

  it('responds to the correct actions', () => {
    expect(mapDispatchToProps(dispatch)).to.respondTo('saveCopy')
  })
})
