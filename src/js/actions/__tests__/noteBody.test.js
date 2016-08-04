import { expect } from 'chai'
import { saveCopy } from '../noteBody'

describe('actions > nodeBody', () => {
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
