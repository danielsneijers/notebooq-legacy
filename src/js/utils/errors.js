export function NoteIdFormatException (id) {
  this.value = id
  this.message = 'This is not a valid note id'
  this.toString = () => `${this.value} ${this.message}`
}
