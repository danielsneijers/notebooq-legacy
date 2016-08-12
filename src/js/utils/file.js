import fs from 'fs'
import path from 'path'

export function isFile (file) {
  return fs.statSync(file).isFile()
}

export function getFileContents (filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

export function getTitleFromFilePath (filePath) {
  return path.basename(filePath, '.md')
}

export function renameFile (filePath, newName) {
  const newPath = getRenamedFilePath(filePath, newName)

  return fs.renameSync(filePath, newPath)
}

export function getRenamedFilePath (filePath, newName) {
  return filePath.replace(getTitleFromFilePath(filePath), newName)
}

export function saveCopyToFile (filePath, copy) {
  return fs.writeFileSync(filePath, copy)
}
