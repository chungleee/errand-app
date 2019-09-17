import React, { Component } from 'react'
import Modal from 'react-modal'
import AddTodoButton from './components/AddTodoButton'
import TodoCard from './components/TodoCard'
import Header from './components/Header'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    const dummyData = [
      {
        title: 'leon',
        tasks: ['task 1', 'task 2']
      },
      {
        title: 'chung',
        tasks: ['task 1', 'task 2']
      }
    ]
    return (
      <div>
        <Header />
        <TodoList>
          <AddTodoButton />
        </TodoList>
      </div>
    )
  }
}

// <section
//   className="flex flex-wrap ph4 justify-center mw6-ns"
//   style={{ margin: 'auto' }}
// >
//   <AddTodoButton />

//   {dummyData.map((data, idx) => {
//     return <TodoCard key={idx} title={data.title} />
//   })}
// </section>

export default App
