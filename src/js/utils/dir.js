import fs from 'fs'
import { max } from 'lodash'
import { NOTES_ROOT_FOLDER } from 'constants/app'

export function isDirectory (path) {
  return fs.statSync(path).isDirectory()
}

export function getDirContents (dir = NOTES_ROOT_FOLDER) {
  return fs
    .readdirSync(dir)
    .filter((item) => !item.startsWith('.'))
}

export function getMostRecentModifiedFileFromDir (dir, files) {
  /* istanbul ignore next */
  return max(files, (file) => fs.statSync(`${dir}/${file}`).mtime)
}

export function listAllFolders (dir = NOTES_ROOT_FOLDER) {
  const dirContents = getDirContents(dir)

  return dirContents.filter((item) => isDirectory(`${dir}/${item}`))
}
