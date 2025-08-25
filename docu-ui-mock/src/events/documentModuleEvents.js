import store from '../store';
import { sendNotification } from '../store/documentThunks';
import { EventBus, EventType } from './eventBus';

export const startListeningDocPageEvents = () => {
  EventBus.on(EventType.Notification, (e) =>
    handleNotificationEvent(e?.detail?.message ?? '-'),
  );
};

export const stopListeningDocPageEvents = () => {
  EventBus.off(EventType.Notification);
};

export const handleNotificationEvent = (message) => {
  store.dispatch(sendNotification(message));
};
