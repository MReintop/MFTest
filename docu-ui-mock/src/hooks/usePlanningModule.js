import React from 'react';


const usePlanningModule = () =>{
  const savePlanningModule = async () => {
    const { handleSaveEvent } = await import('PlansUI/planningModuleEvents');
    await handleSaveEvent();

    console.log('SIIN hookis peale SAVE')
  };

  return { savePlanningModule }
};

export default usePlanningModule;