import { expect } from 'chai'
import path from 'path'
import {
  isFile,
  getFileContents,
  getDirContents,
  getMostRecentModifiedFileFromArray,
  getMostRecentNote,
  getTitleFromFilePath
} from '../file'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`

describe('utils > file', () => {
  describe('isFile', () => {
    it('returns true when a path to a file is passed', () => {
      expect(isFile(sampleNotePath)).to.equal(true)
      expect(isFile(fixturesDirPath)).to.equal(false)
    })
  })

  describe('getFileContents', () => {
    it('returns the contents of a file', () => {
      const expectedResult = '# This sample note helps unit testing\n'

      expect(getFileContents(sampleNotePath)).to.equal(expectedResult)
    })
  })

  describe('getDirContents', () => {
    it('returns array with the files from a directory', () => {
      const expectedResult = [ 'sampleNote.md' ]

      expect(getDirContents(fixturesDirPath)).to.deep.equal(expectedResult)
    })
  })

  describe('getMostRecentModifiedFileFromArray', () => {
    it('returns the latest modified file from an array', () => {
      const actualResult = getMostRecentModifiedFileFromArray(fixturesDirPath, [sampleNotePath])

      expect(actualResult).to.deep.equal(sampleNotePath)
    })
  })

  describe('getMostRecentNote', () => {
    it('returns the file last modified by the syste or user', () => {
      expect(getMostRecentNote(fixturesDirPath)).to.equal(sampleNotePath)
    })
  })

  describe('getTitleFromFilePath', () => {
    it('formats the title when a file path is passed', () => {
      const expectedResult = 'sampleNote'

      expect(getTitleFromFilePath(sampleNotePath)).to.equal(expectedResult)
    })
  })
})
