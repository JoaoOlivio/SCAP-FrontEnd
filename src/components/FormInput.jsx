import React from 'react';
import InputMask from 'react-input-mask';

const FormInput = ({ type, field, placeholder, onChange, label, value, error, mask }) => {
  return (
    <>
      <div className="form-floating mt-3">
        <InputMask
          type={type}
          className={`form-control ${error ? "is-invalid" : "is-valid"}`}
          id={field}
          name={field}
          placeholder={placeholder}
          onChange={onChange}
          value={value || ""}
          mask={mask || ""}
          maskChar=""
        />
        <label htmlFor={field}>{label}</label>
      </div>
      {error && <p className="m-0 small text-danger">{error}</p>}
    </>
  );
}

export default FormInput;
