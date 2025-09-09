import React, { useContext } from 'react';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getShownButtons } from './permissionHelpers';
import { ButtonType } from '../pagePermissionsConfig.interface';

const usePageButtonPermissions = ({
  documentState,
  userRole,
}): ButtonType[] => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getShownButtons(
    pagePermissions.buttons ?? [],
    documentState,
    userRole,
  );
};

export default usePageButtonPermissions;
