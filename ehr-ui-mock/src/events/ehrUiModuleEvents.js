import store from '../store';
import { addSystemNotification } from '../store/ehrUiSlice';

export const handleNotificationEvent = (message) => {
  store.dispatch(addSystemNotification(message));
};
