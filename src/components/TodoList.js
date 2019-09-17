import React from 'react'

const TodoList = ({ children }) => {
  return (
    <section
      className="flex flex-wrap ph4 justify-center mw6-ns"
      style={{ margin: 'auto' }}
    >
      {children}
    </section>
  )
}

export default TodoList
