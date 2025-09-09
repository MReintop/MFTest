import { PageViewConfig } from '../../../permissions/pagePermissionsConfig.interface';
import { PageName } from '../../../permissions/permissionsConstants';
import proceedingButtonPermissions from './proceedingButtonPermissions';
import proceedingSectionPermissions from './proceedingSectionPermissions';
import proceedingTabPermissions from './proceedingTabPermissions';

const proceedingPermissionsCofig: PageViewConfig = {
  pageName: PageName.AdministrativeActProceeding,
  sections: proceedingSectionPermissions,
  tabs: proceedingTabPermissions,
  buttons: proceedingButtonPermissions,
};

export default proceedingPermissionsCofig;
