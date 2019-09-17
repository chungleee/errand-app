import React from 'react'

const TodoCard = ({ title }) => {
  return (
    <div className="h4 w4 ba mr3 mb3 br4 flex items-center justify-center tc grow">
      <p>{title}</p>
    </div>
  )
}
export default TodoCard
