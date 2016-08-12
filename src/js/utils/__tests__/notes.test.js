import { expect } from 'chai'
import path from 'path'
import { getMostRecentNote } from '../notes'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`

describe('utils > note', () => {
  describe('getMostRecentNote', () => {
    it('returns the file last modified by the syste or user', () => {
      expect(getMostRecentNote(fixturesDirPath)).to.equal(sampleNotePath)
    })
  })
})
