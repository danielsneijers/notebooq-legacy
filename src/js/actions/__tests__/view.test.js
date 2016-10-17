import { expect } from 'chai'
import { toggleMarkdownView } from '../view'
import { TOGGLE_MARKDOWN_VIEW } from 'constants/actionTypes'

describe('actions > view', () => {
  describe('toggleMarkdownView', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = { type: TOGGLE_MARKDOWN_VIEW }

      expect(toggleMarkdownView()).to.deep.equal(expectedResult)
    })
  })
})
