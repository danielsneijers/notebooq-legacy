import { expect } from 'chai'
import { spy } from 'sinon'
import { mockState, mockNote } from 'test/fixtures'
import { mapStateToProps, mapDispatchToProps } from '../ListItemContainer'

describe('containers > ListItemContainer', () => {
  it('adds the correct state to props', () => {
    const someProp = { someProp: true }
    expect(mapStateToProps(mockState, someProp)).to.deep.equal(someProp)
  })

  it('adds the correct action methods to props', () => {
    const dispatch = spy()
    const ownProps = { note: mockNote }
    const dispatchProps = mapDispatchToProps(dispatch, ownProps)

    expect(dispatchProps).to.have.all.keys('handleClick')
    expect(dispatch.called).to.be.false

    dispatchProps.handleClick()
    expect(dispatch.calledOnce).to.be.true
  })
})
