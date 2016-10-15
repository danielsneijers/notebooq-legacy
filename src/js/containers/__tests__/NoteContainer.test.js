import { expect } from 'chai'
import { spy } from 'sinon'
import { mockState, mockNote } from '../../__tests__/fixtures'
import { mapStateToProps, mapDispatchToProps } from '../NoteContainer'

describe('containers > NoteContainer', () => {
  it('adds the correct state to props', () => {
    const expectedResult = { note: mockNote }
    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })

  it('adds the correct action methods to props', () => {
    const dispatch = spy()
    const dispatchProps = mapDispatchToProps(dispatch)

    expect(dispatchProps).to.have.all.keys('saveNote', 'selectNote')
    expect(dispatch.called).to.be.false

    dispatchProps.saveNote()
    expect(dispatch.calledOnce).to.be.true

    dispatchProps.selectNote()
    expect(dispatch.calledTwice).to.be.true
  })
})
