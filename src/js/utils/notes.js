export function getMostRecentNote (notes) {
  const mostRecentNote = notes.reduce((prev, curr) => {
    return prev.updated_at > curr.updated_at
      ? prev
      : curr
  })

  return mostRecentNote
}

export function getSelectedNoteFromTree (notes) {
  const selectedNote = notes.find((note) => note.selected)

  return selectedNote || {}
}
