import { expect } from 'chai'
import { setFilePath, saveTitle, saveCopy } from '../note'
import { SET_FILE_PATH, SAVE_TITLE, SAVE_COPY } from 'constants/actionTypes'

describe('actions > input', () => {
  describe('setFilePath', () => {
    it('returns an action object with the correct payload', () => {
      const path = '/path/to/file.md'
      const expectedResult = {
        type: SET_FILE_PATH,
        payload: path
      }

      expect(setFilePath(path)).to.deep.equal(expectedResult)
    })
  })

  describe('saveTitle', () => {
    it('returns an action object with the correct payload', () => {
      const event = {
        currentTarget: {
          value: 'Nice title bro'
        }
      }
      const expectedResult = {
        type: SAVE_TITLE,
        payload: 'Nice title bro',
        meta: {
          debounce: 'simple'
        }
      }

      expect(saveTitle(event)).to.deep.equal(expectedResult)
    })
  })

  describe('saveCopy', () => {
    it('returns an action object with the correct payload', () => {
      const event = {
        currentTarget: {
          value: 'Some inspiring text, you should read it'
        }
      }
      const expectedResult = {
        type: SAVE_COPY,
        payload: 'Some inspiring text, you should read it',
        meta: {
          debounce: 'simple'
        }
      }

      expect(saveCopy(event)).to.deep.equal(expectedResult)
    })
  })
})
