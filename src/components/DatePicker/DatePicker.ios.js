import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  DatePickerIOS,
  Modal,
  Button
} from 'react-native';
import styles from './styles';

class Picker extends Component {
  static defaultProps = {
    mode: 'date',
    locale: 'pt_BR',
    selectedDate: new Date()
  };

  static propTypes = {
    mode: PropTypes.oneOf(['date', 'time']),
    locale: PropTypes.string,
    selectedDate: PropTypes.instanceOf(Date),
    onDateChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: props.selectedDate,
      visible: false
    };
  }

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleOnDateChange = value => {
    this.setState({ selectedDate: value });
  };

  handleonDateSelected = () => {
    this.handleToggle();
    this.props.onDateChange(this.state.selectedDate);
  };

  render() {
    return (
      <Modal
        visible={this.state.visible}
        onRequestClose={() => null}
        animationType="slide"
        transparent
      >
        <View style={styles.pickerViewContainer}>
          <View style={styles.pickerView}>
            <View style={styles.pickerViewTop}>
              <Button title="OK" onPress={this.handleonDateSelected} />
            </View>
            <View style={styles.pickerViewBottom}>
              <DatePickerIOS
                mode={this.props.mode}
                locale={this.props.locale}
                date={this.state.selectedDate}
                onDateChange={this.handleOnDateChange}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Picker;
