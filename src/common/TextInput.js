import React from 'react';

const TextInput = ({
  formClassname,
  autoComplete,
  inputRef,
  hasError,
  id,
  label,
  labelSrOnly,
  maxLength,
  name,
  styles,
  placeholder,
  spellCheck,
  isRequired,
  value,
  onChange,
  onKeyPress,
}) => (
  <div className={`form-group ${formClassname}`}>
    <label htmlFor={id} className={labelSrOnly ? 'sr-only' : ''}>
      {label}
    </label>

    {isRequired && <i className="fa fa-asterisk" aria-hidden="true" style={styles.asterisk} />}
    <input
      ref={inputRef}
      className={`form-control ${hasError ? 'is-invalid' : ''}`}
      autoComplete={autoComplete}
      name={name}
      value={value}
      type="text"
      id={id}
      maxLength={maxLength}
      placeholder={placeholder}
      spellCheck={spellCheck}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />

    {hasError ? <div className="invalid-feedback">Uzupełnij słownik początkowy...</div> : <br />}
  </div>
);

TextInput.defaultProps = {
  styles: {},
  formClassname: '',
  autoComplete: 'random_string_off',
  hasError: false,
  id: null,
  inputRef: null,
  isRequired: false,
  label: '',
  labelSrOnly: false,
  maxLength: 60,
  name: null,
  placeholder: '',
  spellCheck: false,
  value: '',
  onChange: f => f,
  onKeyPress: f => f,
};

export default TextInput;
