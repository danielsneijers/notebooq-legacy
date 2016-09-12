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

export function getSelectedNoteFromTree (notes) {
  const selectedNote = Object.keys(notes)
    .map((folder) => notes[folder].find((note) => note.selected))
    .filter((note) => note)

  return selectedNote[0] || {}
}

export function getNotesTree (dir = NOTES_ROOT_FOLDER, defaultSelectedNotePath) {
  const folders = getAllFolders(dir)
  const rootFolderContent = getFilesFromFolder(dir)

  const rootFolderFiles = rootFolderContent
    .filter((file) => isFile(`${dir}/${file}`))
    .map((file) => noteFromTemplate(`${dir}/${file}`))

  const treeFolderFiles = folders.reduce((acc, folderName) => {
    const currentPath = `${dir}/${folderName}`
    const files = getFilesFromFolder(currentPath)

    return {
      ...acc,
      [folderName]: files.map((file) => {
        const notePath = `${currentPath}/${file}`
        const selected = notePath === defaultSelectedNotePath
        return noteFromTemplate(notePath, folderName, selected)
      })
    }
  }, {})

  return {
    ...treeFolderFiles,
    Default: rootFolderFiles
  }
}

export function noteFromTemplate (filePath, folder, selected = false) {
  return {
    path: filePath,
    title: getTitleFromFilePath(filePath),
    copy: getFileContents(filePath),
    folder,
    selected
  }
}
