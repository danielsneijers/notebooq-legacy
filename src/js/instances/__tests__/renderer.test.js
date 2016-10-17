import { expect } from 'chai'
import { enhanceListItemToCheckbox, renderer } from 'instances/renderer'

describe('instances > renderer', () => {
  describe('enhanceListItemToCheckbox', () => {
    it('returns a list item when regular strings are passed', () => {
      const text = 'Some nice string you\'ve got there'
      const text2 = '<p>also some html</p>'
      const expectedResult = `<li>${text}</li>`
      const expectedResult2 = `<li>${text2}</li>`

      expect(enhanceListItemToCheckbox(text)).to.equal(expectedResult)
      expect(enhanceListItemToCheckbox(text2)).to.equal(expectedResult2)
    })

    it('returns an unchecked checkbox when "[ ]" is found', () => {
      const text = '[ ] unfinished to do'
      const expectedResult = `<li style="list-style: none"><input type="checkbox"> unfinished to do</li>`

      expect(enhanceListItemToCheckbox(text)).to.equal(expectedResult)
    })

    it('returns a checked checkbox when "[x]" is found', () => {
      const text = '[x] finished to do'
      const expectedResult = `<li style="list-style: none"><input type="checkbox" checked> finished to do</li>`

      expect(enhanceListItemToCheckbox(text)).to.equal(expectedResult)
    })
  })

  describe('renderer', () => {
    it('is enhanced with a checkbox render function', () => {
      const text = 'Some nice string you\'ve got there'
      const expectedResult = `<li>${text}</li>`

      expect(renderer.listitem(text)).to.equal(expectedResult)
    })
  })
})
