export function getMostRecentNote (notes) {
  if (!notes) {
    return {}
  }

  const mostRecentNote = notes.reduce((prev, curr) => {
    return prev.updated_at > curr.updated_at
      ? prev
      : curr
  })

  return mostRecentNote
}

export function getSelectedNote (notes) {
  if (!notes) {
    return {}
  }

  return notes.find((note) => note.selected) || {}
}
