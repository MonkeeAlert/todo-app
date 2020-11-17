import React, { forwardRef } from 'react'

const Input = forwardRef(({type, placeholder}, ref) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  )
})

export default Input
