import { expect } from 'chai'
import { mockState, mockNotesList } from '../../__tests__/fixtures'
import { mapStateToProps } from '../SidebarContainer'

describe('containers > SidebarContainer', () => {
  it('adds the correct state to props', () => {
    const expectedResult = { notes: mockNotesList }

    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })
})
