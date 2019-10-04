import React from 'react'
import { handleGetItems } from '../utilities'

const DeleteAllButton = ({ setStorage }) => {
  const handleDeleteAll = () => {
    localStorage.clear()
    handleGetItems(setStorage)
  }

  return (
    <div>
      <div
        onClick={() => {
          handleDeleteAll()
        }}
        className="h4 b w4 mr3 mb3 ba br4 flex items-center justify-center tc grow .bg-washed-blue b--black"
        style={{ cursor: 'pointer' }}
      >
        <i className="fas fa-trash-alt red"></i>
      </div>
    </div>
  )
}

export default DeleteAllButton
