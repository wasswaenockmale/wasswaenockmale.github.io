import React from 'react';

function Modal({ message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <div className="text-center">
          <i className="fas fa-check-circle text-green-500 text-4xl mb-4" />
          <p className="text-xl font-semibold font-poppins">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;