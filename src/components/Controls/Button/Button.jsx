import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({type, text, className, onButtonClick = null}, ref) => {
  
  return (
    <button 
      type={type} 
      onClick={onButtonClick}
      className={className}
    >{text}</button>
  )
}

export default Button

Button.propTypes = {
  type : PropTypes.oneOf([ 'submit', 'button' ]).isRequired, 
  text : PropTypes.string, 
  className : PropTypes.string, 
  onButtonClick : PropTypes.func
}
