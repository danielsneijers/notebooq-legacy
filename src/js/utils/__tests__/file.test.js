import { expect } from 'chai'
import path from 'path'
import {
  isFile,
  getFileContents,
  getDirContents,
  getMostRecentModifiedFileFromArray,
  getMostRecentNote,
  getTitleFromFilePath,
  renameFile,
  getRenamedFilePath
} from '../file'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`
const fileContents = '# This sample note helps unit testing\n'

describe('utils > file', () => {
  describe('isFile', () => {
    it('returns true when a path to a file is passed', () => {
      expect(isFile(sampleNotePath)).to.equal(true)
      expect(isFile(fixturesDirPath)).to.equal(false)
    })
  })

  describe('getFileContents', () => {
    it('returns the contents of a file', () => {
      expect(getFileContents(sampleNotePath)).to.equal(fileContents)
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

  describe('renameFile', () => {
    it('renames the file containing the current note', () => {
      const oldName = 'sampleNote'
      const newName = 'testNote'
      const newNotePath = `${fixturesDirPath}/testNote.md`

      renameFile(sampleNotePath, newName)

      expect(getFileContents.bind(sampleNotePath)).to.throw(Error)
      expect(getFileContents(newNotePath)).to.equal(fileContents)

      renameFile(newNotePath, oldName)

      expect(getFileContents.bind(newNotePath)).to.throw(Error)
      expect(getFileContents(sampleNotePath)).to.equal(fileContents)
    })
  })

  describe('getRenamedFilePath', () => {
    it('returns the new path of a file after it\'s renamed', () => {
      const expectedResult = `${fixturesDirPath}/testNote.md`

      expect(getRenamedFilePath(sampleNotePath, 'testNote')).to.equal(expectedResult)
    })
  })
})
