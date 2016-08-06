import fs from 'fs'
import path from 'path'
import { max } from 'lodash'

export function isFile (file) {
  return fs.statSync(file).isFile()
}

export function getFileContents (filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

export function getDirContents (dir) {
  return fs.readdirSync(dir)
}

export function getMostRecentModifiedFileFromArray (dir, files) {
  /* istanbul ignore next */
  return max(files, (file) => fs.statSync(`${dir}/${file}`).mtime)
}

export function getMostRecentNote (dir) {
  const files = getDirContents(dir)
  const mostRecentFile = getMostRecentModifiedFileFromArray(dir, files)
  const mostRecentFilePath = `${dir}/${mostRecentFile}`

  return isFile(mostRecentFilePath)
    ? mostRecentFilePath
    : /* istanbul ignore next */ getMostRecentNote(mostRecentFilePath)
}

export function getTitleFromFilePath (filePath) {
  return path.basename(filePath, '.md')
}
