// import path from 'path'
// import { expect } from 'chai'
// import { stub } from 'sinon'
// import deepFreeze from 'deep-freeze'
// import notes from '../notes'

describe('reducers > notes', () => {
  it('returns an action object with the correct payload when saving a title', () => {
    // const action = {
    //   type: 'SAVE_TITLE',
    //   path: sampleNotePath,
    //   payload: 'Nice title bro'
    // }
    // const expectedResult = {
    //   ...initialState,
    //   path: `${fixturesDirPath}/Nice title bro.md`,
    //   title: 'Nice title bro'
    // }
    //
    // stub(fileUtils, 'renameFile', () => null)
    // deepFreeze(initialState)
    //
    // expect(notes(initialState, action)).to.deep.equal(expectedResult)
    // expect(fileUtils.renameFile.calledOnce).to.equal(true)
    //
    // fileUtils.renameFile.restore()
  })

  it('returns an action object with the correct payload when saving copy', () => {
    // const action = {
    //   type: 'SAVE_COPY',
    //   path: sampleNotePath,
    //   payload: 'Some inspiring text, you should read it'
    // }
    // const expectedResult = {
    //   ...initialState,
    //   copy: 'Some inspiring text, you should read it'
    // }
    //
    // stub(fileUtils, 'saveCopyToFile', () => null)
    // deepFreeze(initialState)
    //
    // expect(notes(initialState, action)).to.deep.equal(expectedResult)
    //
    // fileUtils.saveCopyToFile.restore()
  })

  it('returns the current state when unknow actions is fired', () => {
    // const action = {
    //   type: 'YOLO',
    //   payload: 'This should not be added to the state'
    // }
    //
    // deepFreeze(initialState)
    //
    // expect(notes(initialState, action)).to.deep.equal(initialState)
  })

  it('uses the default state when none provided', () => {
    // const action = {}
    //
    // expect(notes(undefined, action)).to.deep.equal({})
  })
})
