import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';

const Input = forwardRef(({type, placeholder, className}, ref) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      ref={ref}
      className={className}
    />
  )
})

export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}