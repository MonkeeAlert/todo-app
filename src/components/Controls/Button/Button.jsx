import React from 'react'

function Button({type, text, onButtonClick = null}) {
  return (
    <button type={type} onClick={onButtonClick}>{text}</button>
  )
}

export default Button
