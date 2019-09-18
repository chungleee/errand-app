import React from 'react'

const TodoList = ({ children }) => {
  return (
    <ul
      className="flex flex-wrap ph4 justify-center mw6-ns list"
      style={{ margin: 'auto' }}
    >
      {children}
    </ul>
  )
}

export default TodoList
