import { expect } from 'chai'
import path from 'path'
import {
  isFile,
  getFileContents,
  getTitleFromFilePath,
  renameFile,
  getRenamedFilePath,
  saveCopyToFile
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

  describe('getTitleFromFilePath', () => {
    it('formats the title when a file path is passed', () => {
      const expectedResult = 'sampleNote'

      expect(getTitleFromFilePath(sampleNotePath)).to.equal(expectedResult)
    })
  })

  describe('renameFile', () => {
    it('renames the file containing the current note', (done) => {
      const oldName = 'sampleNote'
      const newName = 'testNote'
      const newNotePath = `${fixturesDirPath}/testNote.md`

      renameFile(sampleNotePath, newName)

      expect(getFileContents.bind(sampleNotePath)).to.throw(Error)
      expect(getFileContents(newNotePath)).to.equal(fileContents)

      renameFile(newNotePath, oldName)

      expect(getFileContents.bind(newNotePath)).to.throw(Error)
      expect(getFileContents(sampleNotePath)).to.equal(fileContents)

      // Small timeout, tests sometimes go too fast for mocha to keep up
      setTimeout(done, 20)
    })
  })

  describe('getRenamedFilePath', () => {
    it('returns the new path of a file after it\'s renamed', () => {
      const expectedResult = `${fixturesDirPath}/testNote.md`

      expect(getRenamedFilePath(sampleNotePath, 'testNote')).to.equal(expectedResult)
    })
  })

  describe('saveCopyToFile', () => {
    it('saves data to specified file', () => {
      const newCopy = 'This new copy really grinds my gears, but at least it\'s saved correctly'

      saveCopyToFile(sampleNotePath, newCopy)
      expect(getFileContents(sampleNotePath)).to.equal(newCopy)

      saveCopyToFile(sampleNotePath, fileContents)
      expect(getFileContents(sampleNotePath)).to.equal(fileContents)
    })
  })
})
