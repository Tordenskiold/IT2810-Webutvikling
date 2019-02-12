import React from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';


//Rendering for the custom inputs 
export default class CustomInput extends React.Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <button type="button" className="example" onClick={onClick}>
        {value}
      </button>
    );
  }
}

CustomInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
