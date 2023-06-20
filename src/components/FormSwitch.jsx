import React from 'react';

const FormSwitch = ({ field, label, value, type }) => {
  return (
    <>
      <div className="form-floating mt-3 ">
        <div class="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={value} />
          <label class="form-check-label" for="flexSwitchCheckDefault">{type}</label>

        </div>
        <label htmlFor={field}>{label}</label>
      </div>
    </>
  );
}

export default FormSwitch;
