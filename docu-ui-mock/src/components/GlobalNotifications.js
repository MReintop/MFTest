import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SnackbarContent, Stack } from '@mui/material';
import {
  notificationsSelector,
  setNotifications,
} from '../store/globalUiSlice/globalUiSlice';
import NotificationActions from './NotificationActions';

const GlobalNotifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(notificationsSelector);

  const [localNotifications, setLocalNotifications] = useState([]);

  const removeNotifications = () => {
    dispatch(setNotifications([]));
    setLocalNotifications([]);
  };

  useEffect(() => {
    if (notifications.length) {
      setLocalNotifications(notifications);
    }
  }, [notifications]);

  return (
    <>
      {!!localNotifications.length && (
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          {localNotifications.map((notification, index) => (
            <SnackbarContent
              key={'notif' + index}
              open={true}
              onClose={removeNotifications}
              message={notification}
              action={
                <NotificationActions
                  removeNotifications={removeNotifications}
                />
              }
            />
          ))}
        </Stack>
      )}
    </>
  );
};

export default GlobalNotifications;
