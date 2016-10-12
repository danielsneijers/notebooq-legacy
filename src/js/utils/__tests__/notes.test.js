import { expect } from 'chai'
import path from 'path'
import { getMostRecentNote, getNotesTree } from '../notes'

const fixturesDirPath = path.resolve('src/js/utils/__tests__/fixtures')
const sampleNotePath = `${fixturesDirPath}/sampleNote.md`

describe('utils > note', () => {
  describe('getMostRecentNote', () => {
    it('returns the file last modified by the system or user', () => {
      expect(getMostRecentNote(fixturesDirPath)).to.equal(sampleNotePath)
    })
  })

  describe('getNotesTree', () => {
    const expectedResult = {
      Personal: [],
      Work: [],
      Default: [{
        path: sampleNotePath,
        title: 'sampleNote',
        copy: '# This sample note helps unit testing\n'
      }]
    }

    expect(getNotesTree(fixturesDirPath)).to.deep.equal(expectedResult)
  })
})
