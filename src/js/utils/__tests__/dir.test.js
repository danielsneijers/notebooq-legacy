import { expect } from 'chai'
import path from 'path'
import { getDirContents, getMostRecentModifiedFileFromDir } from '../dir'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`

describe('utils > dir', () => {
  describe('getDirContents', () => {
    it('returns array with the files from a directory', () => {
      const expectedResult = [ 'sampleNote.md' ]

      expect(getDirContents(fixturesDirPath)).to.deep.equal(expectedResult)
    })
  })

  describe('getMostRecentModifiedFileFromDir', () => {
    it('returns the latest modified file from an array', () => {
      const actualResult = getMostRecentModifiedFileFromDir(fixturesDirPath, [sampleNotePath])

      expect(actualResult).to.deep.equal(sampleNotePath)
    })
  })
})
