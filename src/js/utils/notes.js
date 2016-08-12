import { getDirContents, getMostRecentModifiedFileFromDir } from 'utils/dir'
import { isFile } from 'utils/file'

export function getMostRecentNote (dir) {
  const files = getDirContents(dir)
  const mostRecentFile = getMostRecentModifiedFileFromDir(dir, files)
  const mostRecentFilePath = `${dir}/${mostRecentFile}`

  return isFile(mostRecentFilePath)
    ? mostRecentFilePath /* istanbul ignore next */
    : getMostRecentNote(mostRecentFilePath)
}
