export const mockNote = {
  id: 1,
  folder: 'default',
  title: 'Mock note',
  body: 'Some nice copy',
  selected: true,
  created_at: 1476473779,
  updated_at: 1476473779
}

export const mockNotesList = [
  mockNote,
  {
    id: 2,
    folder: 'default',
    title: 'Mock note 2',
    body: 'Some more copy',
    selected: false,
    created_at: 1476473780,
    updated_at: 1476473780
  },
  {
    id: 3,
    folder: 'default',
    title: 'Mock note 3',
    body: 'Even more copy',
    selected: false,
    created_at: 1476473777,
    updated_at: 1476473777
  }
]

export const mockState = {
  someProperty: 'someValue',
  notes: mockNotesList,
  view: {
    markdown: true
  }
}
