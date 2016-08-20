import { NOTES_ROOT_FOLDER } from 'constants/app'
import { getDirContents, getAllFolders, getMostRecentModifiedFileFromDir } from 'utils/dir'
import { isFile, getFilesFromFolder, getTitleFromFilePath, getFileContents } from 'utils/file'

export function getMostRecentNote (dir = NOTES_ROOT_FOLDER) {
  const files = getDirContents(dir)
  const mostRecentFile = getMostRecentModifiedFileFromDir(dir, files)
  const mostRecentFilePath = `${dir}/${mostRecentFile}`

  return isFile(mostRecentFilePath)
    ? mostRecentFilePath /* istanbul ignore next */
    : getMostRecentNote(mostRecentFilePath)
}

export function getNotesTree (dir = NOTES_ROOT_FOLDER) {
  const folders = getAllFolders(dir)
  const rootFolderContent = getFilesFromFolder(dir)

  const rootFolderFiles = rootFolderContent
    .filter((file) => isFile(`${dir}/${file}`))
    .map((file) => noteTemplate(dir, `${dir}/${file}`))

  const treeFolderFiles = folders.reduce((acc, folderName) => {
    const currentPath = `${dir}/${folderName}`
    const files = getFilesFromFolder(currentPath)

    return {
      ...acc,
      [folderName]: files.map((file) => noteTemplate(currentPath, `${currentPath}/${file}`))
    }
  }, {})

  return {
    ...treeFolderFiles,
    Default: rootFolderFiles
  }
}

export function noteTemplate (currentPath, filePath) {
  return {
    path: currentPath,
    title: getTitleFromFilePath(filePath),
    copy: getFileContents(filePath)
  }
}
