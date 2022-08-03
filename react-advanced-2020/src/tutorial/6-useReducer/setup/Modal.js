import React, { useEffect } from 'react';

const Modal = ({showModal, modalMessage, modalColor, hideModal}) => {


  useEffect(() => {
    // console.log("Modal useEffect");
    const timer = setTimeout(() => {
      hideModal();
    }, 2000);
    // console.log("lol");
    return () => clearTimeout(timer);

  }, [showModal]);

  // console.log("render Modal");
  return (
    <>{showModal && <h4 style={{ color: modalColor }}>{modalMessage}</h4>}</>
  );
};

export default Modal;
