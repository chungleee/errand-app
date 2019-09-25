import React from 'react'

const InputField = ({
  type,
  name,
  value,
  placeholder,
  className,
  style,
  onChange,
  onKeyPress
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      style={style}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}

export default InputField
