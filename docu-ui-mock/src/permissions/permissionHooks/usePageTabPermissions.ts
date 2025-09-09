import React, { useContext } from 'react';
import { TabType } from '../permissionsConstants';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getShownTabs } from './permissionHelpers';

const usePageTabPermissions = ({ documentState, userRole }): TabType[] => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getShownTabs(pagePermissions.tabs ?? [], documentState, userRole);
};

export default usePageTabPermissions;
