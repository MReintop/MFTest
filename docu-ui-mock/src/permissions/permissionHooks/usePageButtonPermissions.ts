import React, { useContext } from 'react';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getShownButtons } from './permissionHelpers';
import {
  ButtonPermissionParams,
  ButtonType,
} from '../pagePermissionsConfig.interface';

const usePageButtonPermissions = (
  params: ButtonPermissionParams,
): ButtonType[] => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getShownButtons(pagePermissions.buttons ?? [], params);
};

export default usePageButtonPermissions;
