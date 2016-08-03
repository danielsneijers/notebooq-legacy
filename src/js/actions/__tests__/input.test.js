import { expect } from 'chai'
import { saveTitle } from '../input'

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
})
