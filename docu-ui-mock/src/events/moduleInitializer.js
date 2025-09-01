import { useEffect } from 'react';
import { EventBus, EventType } from './eventBus';
import {
  handleNotificationEvent,
  handleUnmountEvent,
} from './documentModuleEvents';

const onUnmount = () => {
  console.log('DOCU-UI UNMOUNT');
  handleUnmountEvent();
  stopListeningDocPageEvents();
};

const onNotificationSent = (e) => {
  handleNotificationEvent(e?.detail?.message ?? '-');
};

export const stopListeningDocPageEvents = () => {
  EventBus.off(EventType.Unmount, onUnmount);
  EventBus.off(EventType.Notification, onNotificationSent);
};

export const startListeningDocPageEvents = () => {
  EventBus.on(EventType.Unmount, onUnmount);

  EventBus.on(EventType.Notification, onNotificationSent);
};

const initModule = () => {
  console.log('INIT DOCU-UI');
  startListeningDocPageEvents();
};

initModule();
