import { useState } from 'react'

// custom hook to get values
export const useForm = initialValues => {
  // init state
  const [values, setValues] = useState(initialValues)
  // on change handler
  const handleOnChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  // return
  return [values, setValues, handleOnChange]
}
