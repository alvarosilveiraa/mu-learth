import {
  Constants,
  Permissions,
  Notifications
} from 'expo';

const ICON = '';

export const initialize = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if(Constants.isDevice && status !== 'granted')
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
}

export const addListener = callback => {
  Notifications.addListener(callback);
}

export const sendLocal = (notification, time=null) => {
  return Notifications.scheduleLocalNotificationAsync({
    title: notification.title,
    body: notification.message,
    ios: { sound: true },
    android: {
      sound: true,
      icon: ICON
    },
    data: { type: 'delayed' }
  }, time? { time: time.valueOf() }: null);
}

const notification = {
  initialize,
  addListener,
  sendLocal
}

export default notification;
