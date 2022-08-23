import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

const Field = (props) => (
  <div className="form-group">
        <label htmlFor={props.name.toString().toLowerCase()}>{props.name || props.label}</label>
        <input
        className="form-control"
        // id={props.name.toString().toLowerCase()}
        value={props.form[props.name.toString().toLowerCase()]}
        type={props.type || "text"}
        required
        onChange={(e) => props.onChange(e, props.updateForm, props.name.toString().toLowerCase())}
        />
    </div>
);

Field.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    updateForm: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string
};

Field.defaultProps = {};

export default Field;
