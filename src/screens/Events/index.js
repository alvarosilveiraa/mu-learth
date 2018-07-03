import { connect } from 'react-redux';
import EventsScreen from './screen';

const mapStateToProps = state => ({
  ...state.event
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
