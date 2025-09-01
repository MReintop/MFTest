import React from 'react';
import { Button } from '@mui/material';

const NotificationActions = ({ removeNotifications }) => (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={removeNotifications}>
      Sulgen teavituse
    </Button>
  </React.Fragment>
);

export default NotificationActions;
