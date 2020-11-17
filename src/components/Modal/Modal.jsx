import React, { useRef } from 'react'
import PropTypes from 'prop-types';

export default function Modal({ header, children }) {
  return (
    <div className="modal">
      <div className="modal__bg"></div>
      <div className="modal__window">
        <h1 className="text text--header modal__text--header">{header}</h1>
        {children}      
      </div>
    </div>
  )
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.array,
}
