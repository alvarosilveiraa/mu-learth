import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  DatePickerAndroid,
  TimePickerAndroid,
  View
} from 'react-native';

class Picker extends Component {
  static defaultProps = {
    mode: 'date',
    selectedDate: new Date()
  };

  static propTypes = {
    mode: PropTypes.oneOf(['date', 'time']),
    selectedDate: PropTypes.instanceOf(Date),
    onDateChange: PropTypes.func.isRequired
  };

  state = {
    visible: false
  };

  componentDidUpdate(prevState) {
    if(!prevState.visible && this.state.visible) {
      if(this.props.mode === 'date')
        this.renderDatePicker();
      else if(this.props.mode === 'time')
        this.renderTimePicker();
    }
  }

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleOnDateChange = value => {
    this.handleToggle();
    this.props.onDateChange(value);
  };

  renderTimePicker = async () => {
    const { action, hour, minute } = await TimePickerAndroid.open({
      hour: this.props.selectedDate.getHours(),
      minute: this.props.selectedDate.getMinutes(),
      is24Hour: true
    });
    if(action !== TimePickerAndroid.dismissedAction) {
      const today = new Date();
      const selectedDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hour,
        minute,
        0
      );
      this.handleOnDateChange(selectedDate);
    }else this.handleToggle();
  };

  renderDatePicker = async () => {
    const {
      action,
      year,
      month,
      day,
    } = await DatePickerAndroid.open({
      date: this.props.selectedDate,
    });
    if(action !== DatePickerAndroid.dismissedAction) {
      const selectedDate = new Date(year, month, day);
      this.handleOnDateChange(selectedDate);
    }else this.handleToggle();
  };

  render() {
    return <View />;
  }
}

export default Picker;
