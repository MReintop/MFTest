export const EventType = {
  SystemNotification: 'SystemNotification',
  Notification: 'Notification',
  Save: 'Save',
  Unmount: 'Unmount',
  PlanningModuleSaved: 'PlanningModuleSaved',
};

export const EventBus = {
  //   on: (event: string, callback: EventListenerOrEventListenerObject) => {
  on: (event, callback) => {
    window.addEventListener(event, callback); //callback as EventListener
  },
  off: (event, callback) => {
    window.removeEventListener(event, callback);
  },
  emit: (event, detail) => {
    window.dispatchEvent(new CustomEvent(event, { detail }));
  },
  // To listen to event once, then remove it
  once: (event, callback) => {
    const handler = (e) => {
      callback(e);
      window.removeEventListener(event, handler); // cleanup
    };
    window.addEventListener(event, handler);
  },
};
