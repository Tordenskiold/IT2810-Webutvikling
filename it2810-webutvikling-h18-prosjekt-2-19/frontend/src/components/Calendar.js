import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import CustomInput from './CustomInput';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  formatedDate = (changedDate) => {
    const d = new Date(changedDate);
    this.setState({
      date: changedDate
    });

    // https://stackoverflow.com/a/30272803/597642
    return `${d.getFullYear()}-${`0${d.getMonth() + 1}`.slice(-2)}-${`0${d.getDate()}`.slice(-2)}`;
  };

  render() {
    const { onSelect } = this.props;
    const { date } = this.state;

    return (
      <DatePicker
        customInput={<CustomInput onClick={this.onSelect} value={date} />}
        selected={date}
        onChange={changedDate => onSelect(this.formatedDate(changedDate))}
        showYearDropdown
        dropdownMode="select"
      />
    );
  }
}

Calendar.propTypes = {
  onSelect: PropTypes.func.isRequired
};
