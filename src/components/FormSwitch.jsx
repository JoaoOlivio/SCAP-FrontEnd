import React from 'react';

const FormSwitch = ({ field, label, value, type, onChange}) => {
  return (
    <>
      <div className="form-floating mt-3 ">
        <div className="form-check form-switch">
          <input className="form-check-input" onChange={onChange} name={field} type="checkbox" role="switch" id="flexSwitchCheckDefault" value={value} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{type}</label>
        </div>
        <label htmlFor={field}>{label}</label>
      </div>
    </>
  );
}

export default FormSwitch;
