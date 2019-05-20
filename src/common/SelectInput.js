import React from 'react';

const SelectInput = ({ inputRef, hasError, id, label, options, name, styles, isRequired, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>

    {isRequired && <i className="fa fa-asterisk" aria-hidden="true" style={styles.asterisk} />}

    <select
      ref={inputRef}
      className={`form-control ${hasError ? 'is-invalid' : ''}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}>
      <option>{}</option>
      {options.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>

    {hasError ? <div className="invalid-feedback">This field is required.</div> : <br />}
  </div>
);

SelectInput.defaultProps = {
  options: [],
  styles: {},
  hasError: false,
  id: null,
  inputRef: null,
  isRequired: false,
  label: '',
  name: null,
  onChange: f => f,
};

export default SelectInput;
