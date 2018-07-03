import { connect } from 'react-redux';
import EventsScreen from './screen';
import EventActions from '../../redux/data/Event';

const mapStateToProps = state => ({
  ...state.event
});

const mapDispatchToProps = dispatch => ({
  updateEvents(events) {
    return dispatch(EventActions.updateEvents(events));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
