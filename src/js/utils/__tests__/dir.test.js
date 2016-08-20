import { expect } from 'chai'
import path from 'path'
import {
  isDirectory,
  getDirContents,
  getMostRecentModifiedFileFromDir,
  getAllFolders
} from '../dir'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`

describe('utils > dir', () => {
  describe('isDirectory', () => {
    it('returns true when a path to a file is passed', () => {
      expect(isDirectory(sampleNotePath)).to.equal(false)
      expect(isDirectory(fixturesDirPath)).to.equal(true)
    })
  })

  describe('getDirContents', () => {
    it('returns array with the files and folders from a directory, ignoring . files', () => {
      const expectedResult = [ 'Personal', 'Work', 'sampleNote.md' ]

      expect(getDirContents(fixturesDirPath)).to.deep.equal(expectedResult)
    })
  })

  describe('getMostRecentModifiedFileFromDir', () => {
    it('returns the latest modified file from an array', () => {
      const actualResult = getMostRecentModifiedFileFromDir(fixturesDirPath, [sampleNotePath])

      expect(actualResult).to.deep.equal(sampleNotePath)
    })
  })

  describe('getAllFolders', () => {
    it('returns all folders in the notes directory', () => {
      const actualResult = getAllFolders(fixturesDirPath)
      const expectedResult = ['Personal', 'Work']

      expect(actualResult).to.deep.equal(expectedResult)
    })
  })
})
