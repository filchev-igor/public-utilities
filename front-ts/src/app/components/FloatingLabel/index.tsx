import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface props {
    type?: string,
    placeholder: string,
    value: string,
    isCreatingAccount?: boolean,
    onChange: any
}

const FloatingLabel = ({
  type, placeholder, value, isCreatingAccount, onChange,
} : props) => {
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
};

FloatingLabel.defaultProps = {
  type: 'text',
  isCreatingAccount: true,
};

export default FloatingLabel;
