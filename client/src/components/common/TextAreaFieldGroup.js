import React from 'react';
import PropTypes from 'prop-types';


const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) => {
  return (
    <div className="form-group">
    <textarea 
    className="form-control form-control-lg"
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    />
    </div>

    )
  }

  TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };
  

  

export default TextAreaFieldGroup