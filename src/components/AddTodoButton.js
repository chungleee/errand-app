import React, { useState } from 'react'
import Modal from 'react-modal'
import InputField from './InputField'

const AddTodoButton = ({ handleModal, modal, tasks, setTasks }) => {
  const useForm = initialValues => {
    const [values, setValues] = useState(initialValues)

    const handleOnChange = event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
    }

    return [values, setValues, handleOnChange]
  }

  const [values, setValues, handleOnChange] = useForm({ title: '', task: '' })

  // styling
  const styles = {
    inputs: {
      border: 'none',
      borderBottom: '1px solid black'
    },
    inputControl: { marginLeft: 'auto', marginRight: 'auto' }
  }

  return (
    <div>
      <button
        onClick={handleModal}
        className="h4 w4 mr3 ba br4 flex items-center justify-center tc grow bg-white b--black"
      >
        +
      </button>
      <Modal
        onRequestClose={() => {
          handleModal()
        }}
        isOpen={modal}
      >
        <h1 className="f2 tc">Organise your errands</h1>
        <div
          className="mt3 mb3 mw6-ns flex flex-column items-center"
          style={styles.inputControl}
        >
          <InputField
            onChange={handleOnChange}
            type="text"
            name="title"
            value={values.title}
            placeholder="Title"
            className="input-reset mb3 w-75 h2 f3 tc tracked fw6 i"
            style={styles.inputs}
          />

          <InputField
            onChange={handleOnChange}
            type="text"
            name="task"
            value={values.task}
            placeholder="Task"
            className="input-reset mb3 w-75 h2 f6 tc tracked fw6 i"
            style={styles.inputs}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                setTasks([...tasks, { task: values.task }])
                setValues({ ...values, task: '' })
              }
            }}
          />
          <div>
            <button
              className="grow"
              onClick={() => {
                setTasks([...tasks, { task: values.task }])
                setValues({ ...values, task: '' })
              }}
            >
              add
            </button>
            <button className="grow">save</button>
          </div>
        </div>
        <div>
          <h1 className="f2 tc">{values.title}</h1>
          <ol className="list pl0 tc">
            {tasks.length <= 0
              ? null
              : tasks.map((el, idx) => {
                  return (
                    <li className="pa1" key={idx}>
                      {el.task}
                    </li>
                  )
                })}
            {/*tasks.length <= 0
              ? null
              : tasks.map((task, idx) => {
                  return (
                    <li className="pa1" key={idx}>
                      {task}
                    </li>
                  )
                })*/}
          </ol>
        </div>
      </Modal>
    </div>
  )
}

export default AddTodoButton
