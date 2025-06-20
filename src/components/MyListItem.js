import React from 'react'

const MyListItem = ({ listContent,listContentTwo}) => {
  return (
    <li>
        {listContent || listContentTwo}
    </li>
  )
}

export default MyListItem
