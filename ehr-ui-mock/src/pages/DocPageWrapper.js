import React, { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cleanEhrUiSlice,
  setSystemNotifications,
  systemNotificationsSelector,
} from '../store/ehrUiSlice';
import { EventBus, EventType } from '../events/eventBus';
import PageWrapper from '../components/components/PageWrapper';
import { Button, SnackbarContent, Stack } from '@mui/material';
import { handleNotificationEvent } from '../events/ehrUiModuleEvents';

import 'DocuUI/moduleInitializer';

const DocPage = React.lazy(() => import('DocuUI/DocPage'));

const DocPageWrapper = () => {
  const dispatch = useDispatch();

  const systemNotifications = useSelector(systemNotificationsSelector);
  const [localSystemNotification, setLocalSystemNotifications] = useState([]);

  useEffect(() => {
    if (systemNotifications?.length) {
      setLocalSystemNotifications(systemNotifications);
    }
  }, [systemNotifications]);

  const handleSystemNotification = (e) => {
    handleNotificationEvent(e.detail?.message);
  };

  useEffect(() => {
    EventBus.on(EventType.SystemNotification, (e) =>
      handleNotificationEvent(e.detail?.message),
    );

    return () => {
      dispatch(cleanEhrUiSlice());

      EventBus.off(EventType.SystemNotification, handleSystemNotification);
      EventBus.emit(EventType.Unmount);
    };
  }, []);

  const removeNotifications = () => {
    dispatch(setSystemNotifications([]));
    setLocalSystemNotifications([]);
  };

  const Notification = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={removeNotifications}>
        Sulge süsteemi teavitus
      </Button>
    </React.Fragment>
  );

  return (
    <PageWrapper title="Document">
      <Suspense fallback={<>Laen andmeid ...</>}>
        <DocPage permissions={['W']} />
      </Suspense>

      {!!localSystemNotification.length && (
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          {localSystemNotification.map((notification, index) => (
            <SnackbarContent
              open={true}
              key={'sys-notif' + index}
              onClose={removeNotifications}
              message={notification}
              action={Notification}
            />
          ))}
        </Stack>
      )}
    </PageWrapper>
  );
};

export default DocPageWrapper;
