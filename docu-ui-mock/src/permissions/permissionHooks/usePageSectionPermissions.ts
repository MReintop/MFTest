import React, { useContext } from 'react';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getSectionPermissions, PermissionsConf } from './permissionHelpers';
import {
  DocumentState,
  PageSection,
  Role,
  SectionHTMLElement,
} from '../permissionsConstants';

interface usePageSectionPermissionsProps {
  sectionName: PageSection | SectionHTMLElement;
  userRole: Role;
  documentState: DocumentState;
}

const usePageSectionPermissions = ({
  sectionName,
  documentState,
  userRole,
}: usePageSectionPermissionsProps): PermissionsConf => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getSectionPermissions(
    pagePermissions.sections.find(
      (section) => section.sectionName === sectionName,
    ),
    documentState,
    userRole,
  );
};

export default usePageSectionPermissions;
