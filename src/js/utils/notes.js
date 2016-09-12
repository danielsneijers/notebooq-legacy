import { NOTES_ROOT_FOLDER } from 'constants/app'
import { getDirContents, listAllFolders, getMostRecentModifiedFileFromDir } from 'utils/dir'
import { isFile, listFilesFromFolder, getTitleFromFilePath, getFileContents, getFolderFromFilePath } from 'utils/file'

export function getMostRecentNote (dir = NOTES_ROOT_FOLDER) {
  const files = getDirContents(dir)
  const mostRecentFile = getMostRecentModifiedFileFromDir(dir, files)
  const mostRecentFilePath = `${dir}/${mostRecentFile}`

  return isFile(mostRecentFilePath)
    ? mostRecentFilePath /* istanbul ignore next */
    : getMostRecentNote(mostRecentFilePath)
}

export function getSelectedNoteFromTree (notes) {
  const selectedNote = notes.find((note) => note.selected)

  return selectedNote || {}
}

export function getNotesTree (dir = NOTES_ROOT_FOLDER, defaultSelectedNotePath) {
  const folders = listAllFolders(dir)
  const rootFolderContent = listFilesFromFolder(dir)

  const rootFolderFiles = rootFolderContent
    .filter((file) => isFile(`${dir}/${file}`))
    .map((file) => noteFromTemplate(`${dir}/${file}`))

  const treeFolderFiles = folders.reduce((acc, folderName) => {
    const currentPath = `${dir}/${folderName}`
    const files = listFilesFromFolder(currentPath)

    return [
      ...acc,
      ...files.map((file) => {
        const notePath = `${currentPath}/${file}`
        const selected = notePath === defaultSelectedNotePath
        return noteFromTemplate(notePath, selected)
      })
    ]
  }, [])

  return [
    ...rootFolderFiles,
    ...treeFolderFiles
  ]
}

export function noteFromTemplate (filePath, selected = false) {
  return {
    path: filePath,
    title: getTitleFromFilePath(filePath),
    copy: getFileContents(filePath),
    folder: getFolderFromFilePath(filePath),
    selected
  }
}
