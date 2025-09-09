import { PageViewConfig } from '../../../permissions/pagePermissionsConfig.interface';
import { PageName } from '../../../permissions/permissionsConstants';
import planningButtonPermissions from './planningButtonPermissions';
import planningSectionPermissions from './planningSectionPermissions';
import planningTabPermissions from './planningTabPermissions';

const planningPermissionsCofig: PageViewConfig = {
  pageName: PageName.Planning,
  sections: planningSectionPermissions,
  tabs: planningTabPermissions,
  buttons: planningButtonPermissions,
};

export default planningPermissionsCofig;
