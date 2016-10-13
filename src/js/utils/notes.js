export function getMostRecentNote (notes) {
  return {}
}

export function getSelectedNoteFromTree (notes) {
  const selectedNote = notes.find((note) => note.selected)

  return selectedNote || {}
}
