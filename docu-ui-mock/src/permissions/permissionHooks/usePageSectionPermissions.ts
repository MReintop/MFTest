import React, { useContext } from 'react';
import PagePermissionsContext from '../../contexts/PagePermissionsContext';
import { getSectionPermissions, PermissionsConf } from './permissionHelpers';
import { PageSection, SectionHTMLElement } from '../permissionsConstants';
import { SectionPermissionParams } from '../pagePermissionsConfig.interface';

interface usePageSectionPermissionsProps {
  sectionName: PageSection | SectionHTMLElement;
  params: SectionPermissionParams;
}

const usePageSectionPermissions = ({
  sectionName,
  params,
}: usePageSectionPermissionsProps): PermissionsConf => {
  const pagePermissions = useContext(PagePermissionsContext);

  return getSectionPermissions(
    pagePermissions.sections.find(
      (section) => section.sectionName === sectionName,
    ),
    params,
  );
};

export default usePageSectionPermissions;
