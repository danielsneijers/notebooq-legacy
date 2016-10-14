export function getMostRecentNote (notes) {
  // TODO fill in this method
  return {}
}

export function getSelectedNoteFromTree (notes) {
  const selectedNote = notes.find((note) => note.selected)

  return selectedNote || {}
}
