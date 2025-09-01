import { useEffect } from 'react';
import { EventBus, EventType } from './eventBus';
import { handleSaveEvent, handleUnmountEvent } from './planningModuleEvents';

const onUnmount = () => {
  console.log('SIIN sain planning module unmount');
  handleUnmountEvent();
  stopListeningToEvents();
};

const onSaveEvent = () => {
  handleSaveEvent();
};

const stopListeningToEvents = () => {
  EventBus.off(EventType.Save, onSaveEvent);
  EventBus.off(EventType.Unmount, onUnmount);
};

const setupEventListeners = () => {
  EventBus.on(EventType.Save, onSaveEvent);
  EventBus.on(EventType.Unmount, onUnmount);
};

const initModule = () => {
  setupEventListeners();
};

initModule();
