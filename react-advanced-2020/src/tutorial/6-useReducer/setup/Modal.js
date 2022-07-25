import React, { useEffect } from 'react';

const Modal = ({ message, show }) => {
  return <>{show && <h4>{message}</h4>}</>;
};

export default Modal;
