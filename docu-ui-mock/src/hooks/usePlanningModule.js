import React from 'react';

const usePlanningModule = () => {
  const savePlanningModule = async () => {
    try {
      const { handleSaveEvent } = await import('PlansUI/planningModuleEvents');
      await handleSaveEvent();
    } catch (e) {
      console.log('SIIN', e);
    }
  };

  const umnountPlanningModule = async () => {
    try {
      const { handleUnmountEvent } = await import(
        'PlansUI/planningModuleEvents'
      );

      await handleUnmountEvent();
    } catch (e) {
      console.log('SIIN', e);
    }
  };

  return { savePlanningModule, umnountPlanningModule };
};

export default usePlanningModule;
