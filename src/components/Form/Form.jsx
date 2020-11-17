import React from 'react'
import PropTypes from 'prop-types'

function Form({children, onSubmitEvent, className}) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitEvent();
  }
  return (
    <form onSubmit={ handleSubmit } className={className}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.array.isRequired
}

export default Form

