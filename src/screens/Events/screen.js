import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import { colors, images } from '../../themes';
import styles from './styles';

export default class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.updateTimes();
    setInterval(this.updateTimes.bind(this), 1000);
  }

  nextWeekDay(weekDays, weekDay) {
    let diff = 1;
    for(let i = weekDay; i < 7 + weekDay; i++) {
      const n = i % 7;
      if(n !== weekDay) {
        if(weekDays[n]) break;
        diff++;
      }
    }
    return diff;
  }

  getEventsTimedown() {
    const events = this.props.events;
    return events.map(event => {
      const now = moment();
      const time = event.respawn.filter(time => time >= now.format('HH:mm'))[0];
      const next = this.nextWeekDay(event.weekDays, now.day());
      if(next > 1) {
        return {
          name: event.name,
          timedown: next + ' DIAS'
        }
      }else {
        let format = '';
        if(time) format = now.format(`YYYY-MM-DD ${time}:00`);
        else format = now.add(next, 'days').format(`YYYY-MM-DD ${event.respawn[0]}:00`);
        const day = moment(format);
        const diff = day.diff(now, 'seconds');
        const utc = moment.utc(diff * 1000).format('HH:mm:ss');
        return {
          name: event.name,
          timedown: utc
        }
      }
    });
  }

  updateTimes() {
    const timedown = this.getEventsTimedown();
    const min = timedown.map(r => r.timedown).reduce((a, b) => a < b? a: b);
    const indexs = _.filter(timedown, { timedown: min });
    const events = timedown.map(event => {
      return {
        ...event,
        active: _.find(indexs, { name: event.name })? true: false
      }
    });
    this.setState({ events });
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.brandContainer}>
          <Image source={images.brand} style={styles.brand} />
        </View>
        <ScrollView style={styles.container}>
          {this.state.events.map((event, i) => (
            <View key={'event' + i} style={styles.event}>
              <Text style={event.active? styles.eventNameActive: styles.eventName}>
                {this.props.events[i].name.toUpperCase()}
              </Text>
              <Text style={event.active? styles.eventTimedownActive: styles.eventTimedown}>
                {event.timedown}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
