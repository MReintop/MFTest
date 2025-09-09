# Module federation POC

How to run

run npm i and npm run start in docu-ui-mock and planis-ui-mock ja ehr-ui-mock directories

# Events

- Notifications
- Saving
- Unmount

# How it works

Each module has moduleInitializer.js, which sets up events it needs to listen and, if needed, store.

Each module has eventBus.js which enables it to communcate to other modules. The EventTypes defined need to be the same. This could be moved to a common module and in Typescript it should be an enum.

Each module sets up its own store and data management.

Planis-ui-mock module sections handle their own data fetching. They fetch data based on URL parameters (Could also be done by props).

DocPageWrapper knows it will use docum-ui-mock module and imports import 'DocuUI/moduleInitializer', to initialize the module.

DocPage knows it will use planis-ui-mock module and imports import 'PlansUI/moduleInitializer'. This triggers the child module event listeners.
