import { PageViewConfig } from '../../../../permissions/pagePermissionsConfig.interface';
import { PageName } from '../../../../permissions/permissionsConstants';
import application12973ButtonPermissions from './application12973ButtonPermissions';
import application12973SectionPermissions from './application12973SectionPermissions';
import application12973TabPermissions from './application12973TabPermissions';

const application12973PermissionsCofig: PageViewConfig = {
  pageName: PageName.Document,
  documentType: { doty: 12973, name: 'Taotlus' },
  sections: application12973SectionPermissions,
  tabs: application12973TabPermissions,
  buttons: application12973ButtonPermissions,
};

export default application12973PermissionsCofig;
