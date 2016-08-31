import fs from 'fs'
import path from 'path'
import { getDirContents } from './dir'

export function isFile (path) {
  return fs.statSync(path).isFile()
}

export function getFilesFromFolder (dir) {
  return getDirContents(dir).filter((item) => isFile(`${dir}/${item}`))
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
  return `${path.dirname(filePath)}/${newName}.md`
}

export function saveCopyToFile (filePath, copy) {
  return fs.writeFileSync(filePath, copy)
}
