import React from 'react';
import PropTypes from 'prop-types';
import './SignUpField.scss';

const SignUpField = (props) => (
  <div className="form-group">
        <label htmlFor={props.name.toString().toLowerCase()}>{props.name}</label>
        <input
        type="text"
        className="form-control"
        id={props.name.toString().toLowerCase()}
        value={props.form[props.name.toString().toLowerCase()]}
        type={props.type || "text"}
        required
        onChange={(e) => props.onChange(e, props.updateForm, props.name.toString().toLowerCase())}
        />
    </div>
);

SignUpField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    updateForm: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string
};

SignUpField.defaultProps = {};

export default SignUpField;
