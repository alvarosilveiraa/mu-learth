import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import firebase from 'firebase';
import { colors, images } from '../../themes';
import styles from './styles';

export default class Events extends Component {
  state = {
    events: [],
    isFetching: true
  };

  componentDidMount() {
    this.initialize();
  }

  async initialize() {
    const data = await firebase.database().ref('events').once('value');
    const events = data.val();
    if(events) await this.props.updateEvents(events);
    this.setState({ isFetching: false });
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
    const events = this.props.events || [];
    return events.map(event => {
      const respawn = event.respawn;
      const now = moment();
      const time = respawn.filter(time => time >= now.format('HH:mm'))[0];
      const next = this.nextWeekDay(event.weekDays, now.day());
      let format = '';
      if(time && event.weekDays[now.day()]) format = now.format(`YYYY-MM-DD ${time}:00`);
      else {
        const aux = moment(now.format('YYYY-MM-DD HH:mm:ss'));
        format = aux.add(next, 'days').format(`YYYY-MM-DD ${respawn[0]}:00`);
      }
      const day = moment(format);
      const diff = day.diff(now, 'seconds');
      if(diff > 24 * 60 * 60) {
        return {
          slug: event.slug,
          name: event.name,
          timedown: `${next} DIA${next > 1? 'S': ''}`
        };
      }else {
        const utc = moment.utc(diff * 1000).format('HH:mm:ss');
        return {
          slug: event.slug,
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
        active: _.find(indexs, { slug: event.slug })? true: false
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
        {!this.state.isFetching? (
          <ScrollView style={styles.container}>
            {this.state.events.map((event, i) => (
              <View key={'event' + i} style={styles.event}>
                <Text style={event.active? styles.eventNameActive: styles.eventName}>
                  {event.name.toUpperCase()}
                </Text>
                <Text style={event.active? styles.eventTimedownActive: styles.eventTimedown}>
                  {event.timedown}
                </Text>
              </View>
            ))}
          </ScrollView>
        ): (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.light} />
          </View>
        )}
      </View>
    );
  }
}
