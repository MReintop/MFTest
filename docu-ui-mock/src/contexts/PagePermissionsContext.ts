import { createContext } from 'react';
import { PageViewConfig } from '../permissions/pagePermissionsConfig.interface';
import { PageName } from '../permissions/permissionsConstants';

const PagePermissionsContext = createContext<PageViewConfig>({
  pageName: PageName.Document,
  documentType: { doty: 0, name: '' },
  sections: [],
  tabs: [],
  buttons: [],
});

export default PagePermissionsContext;
