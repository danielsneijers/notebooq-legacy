import { expect } from 'chai'
import { mapStateToProps } from '../NoteContainer'

const mockState = {
  someProperty: 'someValue',
  note: {
    path: '/Users/danielsneijers/Dropbox/DevNotes/Personal/Test Note.md'
  }
}

describe('containers > NoteContainer', () => {
  it('adds the correct state to props', () => {
    // const expectedResult = { filePath: '/Users/danielsneijers/Dropbox/DevNotes/Personal/Test Note.md' }

    expect(mapStateToProps(mockState)).to.deep.equal({})
  })
})
