import React, { PropTypes } from 'react'
import List from 'components/List'

import CSS from './Sidebar.css'

const Sidebar = ({ notes }) => {
  return (
    <div className={CSS.Sidebar}>
      <List notes={notes} />
    </div>
  )
}

Sidebar.propTypes = {
  notes: PropTypes.array.isRequired
}

export default Sidebar
