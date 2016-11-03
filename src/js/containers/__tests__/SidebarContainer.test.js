import { expect } from 'chai'
import { stub } from 'sinon'
import { mockState, mockNotesList } from 'test/fixtures'
import * as noteSelectors from 'selectors/noteSelectors'
import { mapStateToProps } from '../SidebarContainer'

describe('containers > SidebarContainer', () => {
  beforeEach(() => {
    stub(noteSelectors, 'getNotesSortedByDate', () => mockNotesList)
  })

  afterEach(() => {
    noteSelectors.getNotesSortedByDate.restore()
  })

  it('adds the correct state to props', () => {
    const expectedResult = { notes: mockNotesList }

    expect(mapStateToProps(mockState)).to.deep.equal(expectedResult)
  })
})
