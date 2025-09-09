import React, { useContext } from 'react';
import { TabType } from '../permissionsConstants';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getShownTabs } from './permissionHelpers';
import { TabPermissionParams } from '../pagePermissionsConfig.interface';

const usePageTabPermissions = (params: TabPermissionParams): TabType[] => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getShownTabs(pagePermissions.tabs ?? [], params);
};

export default usePageTabPermissions;
