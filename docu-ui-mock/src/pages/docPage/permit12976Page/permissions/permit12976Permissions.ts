import { PageViewConfig } from '../../../../permissions/pagePermissionsConfig.interface';
import { PageName } from '../../../../permissions/permissionsConstants';
import permit12976ButtonPermissions from './permit12976ButtonPermissions';
import permit12976SectionPermissions from './permit12976SectionPermissions';
import permit12976TabPermissions from './permit12976TabPermissions';

const permit12976PermissionsCofig: PageViewConfig = {
  pageName: PageName.Document,
  documentType: { doty: 12976, name: 'Hoonestusluba' },
  sections: permit12976SectionPermissions,
  tabs: permit12976TabPermissions,
  buttons: permit12976ButtonPermissions,
};

export default permit12976PermissionsCofig;
