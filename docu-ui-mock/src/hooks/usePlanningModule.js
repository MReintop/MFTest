import React from 'react';

const usePlanningModule = () => {
  const planningModuleStartListeningEvents = async () => {
    console.log('SIIN alustan kuulamist');
    try {
      const { startListeningToEvents } = await import(
        'PlansUI/planningModuleEvents'
      );
      await startListeningToEvents();
    } catch (e) {
      console.log('SIIN planning module start listening error :', e);
    }
  };

  const savePlanningModule = async () => {
    try {
      const { handleSaveEvent } = await import('PlansUI/planningModuleEvents');
      await handleSaveEvent();
    } catch (e) {
      console.log('SIIN save planning module error : ', e);
    }
  };

  const umnountPlanningModule = async () => {
    try {
      const { handleUnmountEvent } = await import(
        'PlansUI/planningModuleEvents'
      );

      await handleUnmountEvent();
    } catch (e) {
      console.log('SIIN unmount planning module error : ', e);
    }
  };

  return {
    savePlanningModule,
    umnountPlanningModule,
    planningModuleStartListeningEvents,
  };
};

export default usePlanningModule;
