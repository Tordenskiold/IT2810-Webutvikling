/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Drop Down menu rendering occurs here
// After any drop down menu has been clicked on, the corresponding options appear to the specific
// drop down menu
class Dropdown extends React.Component {
  render() {
    const { onSelect, options } = this.props;
    return <Select onChange={optionSelected => onSelect(optionSelected.value)} options={options} />;
  }
}

Dropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdown;
