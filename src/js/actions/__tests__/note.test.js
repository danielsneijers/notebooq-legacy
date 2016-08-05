import { expect } from 'chai'
import { saveTitle, saveCopy } from '../note'

describe('actions > input', () => {
  describe('saveTitle', () => {
    it('returns an action object with the correct payload', () => {
      const event = {
        currentTarget: {
          value: 'Nice title bro'
        }
      }
      const expectedResult = {
        type: 'SAVE_TITLE',
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
        type: 'SAVE_COPY',
        payload: 'Some inspiring text, you should read it',
        meta: {
          debounce: 'simple'
        }
      }

      expect(saveCopy(event)).to.deep.equal(expectedResult)
    })
  })
})
