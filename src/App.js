import React from 'react'
import AddTodoButton from './components/AddTodoButton'
import TodoCard from './components/TodoCard'

function App() {
  return (
    <div>
      <header className="tc mv4">
        <h1 className="f2">Welcome to the Errands app</h1>
        <p>Feel free to create your new list of errands!</p>
      </header>
      <section
        className="flex flex-wrap ph4 justify-center mw6-ns"
        style={{ margin: 'auto' }}
      >
        <AddTodoButton />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </section>
    </div>
  )
}

export default App
