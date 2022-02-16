import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function FloatingLabel({
  type = 'text', placeholder, value, isCreatingAccount = true, onChange,
}) {
  const id = uuidv4();

  return (
    <div className="form-floating mb-3">
      <input
        autoComplete={isCreatingAccount ? 'new-password' : 'on'}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
}

export default FloatingLabel;
