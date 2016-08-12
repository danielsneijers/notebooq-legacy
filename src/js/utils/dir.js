import fs from 'fs'
import { max } from 'lodash'

export function getDirContents (dir) {
  return fs.readdirSync(dir)
}

export function getMostRecentModifiedFileFromDir (dir, files) {
  /* istanbul ignore next */
  return max(files, (file) => fs.statSync(`${dir}/${file}`).mtime)
}
