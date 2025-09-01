import store from '../store';
import { cleanDocumentSlice } from '../store/documentSlice/documentSlice';
import { cleanGlobalUISlice } from '../store/globalUiSlice/globalUiSlice';
import { sendNotification } from '../store/globalUiSlice/globalUiThunks';
import { cleanProceedingSlice } from '../store/proceedingSlice/proceedingSlice';

export const handleNotificationEvent = (message) => {
  store.dispatch(sendNotification(message));
};

export const handleUnmountEvent = () => {
  // Remove slice or empty it
  // store.reducerManager.remove(PlanningGeneralDataSliceKey);

  store.dispatch(cleanDocumentSlice());
  store.dispatch(cleanGlobalUISlice());
  store.dispatch(cleanProceedingSlice());
};
