import React, { PropTypes } from 'react'
import List from 'components/List'

const Sidebar = ({ notes }) => {
  return (
    <div>
      <List notes={notes} />
    </div>
  )
}

Sidebar.propTypes = {
  notes: PropTypes.array.isRequired
}

export default Sidebar
