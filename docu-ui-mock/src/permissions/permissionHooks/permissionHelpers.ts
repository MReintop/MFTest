import {
  ButtonPermissionParams,
  ButtonRule,
  ButtonType,
  Rule,
  Section,
  SectionPermissionParams,
  TabPermissionParams,
  TabRule,
} from '../pagePermissionsConfig.interface';
import { TabType } from '../permissionsConstants';

export interface PermissionsConf {
  read?: boolean;
  edit?: boolean;
  create?: boolean;
  delete?: boolean;
}

const hasRuleMatch = (
  rules: Rule[],
  params:
    | TabPermissionParams
    | SectionPermissionParams
    | ButtonPermissionParams,
) => {
  const { documentState, userRole } = params;

  return rules.some((rule: Rule) => {
    const roleMatches =
      // @ts-ignore
      Array.isArray(rule.role) && rule.role.includes(userRole);

    const documentStateMatches =
      !documentState || (rule.documentState?.includes(documentState) ?? false);

    return roleMatches && documentStateMatches;
  });
};

export const getShownTabs = (
  tabRules: TabRule[],
  params: TabPermissionParams,
): TabType[] => {
  return tabRules
    .filter((tabRule) => hasRuleMatch(tabRule.showTab, params))
    .map((tabRule) => tabRule.tabName);
};

export const getShownButtons = (
  buttonRules: ButtonRule[],
  params: ButtonPermissionParams,
): ButtonType[] => {
  return buttonRules
    .filter((rule: ButtonRule) => hasRuleMatch(rule.showButton, params))
    .map((tabRule) => tabRule.buttonName);
};

export const getSectionPermissions = (
  sectionPermissions: Section | undefined,
  params: SectionPermissionParams,
): PermissionsConf => {
  const hasEditPermission = () => {
    return (
      sectionPermissions?.edit && hasRuleMatch(sectionPermissions.edit, params)
    );
  };

  const hasReadPermission = () => {
    return (
      sectionPermissions?.read && hasRuleMatch(sectionPermissions.read, params)
    );
  };

  const hasCreatePermission = () => {
    return (
      sectionPermissions?.create &&
      hasRuleMatch(sectionPermissions.create, params)
    );
  };

  const hasDeletePermission = () => {
    return (
      sectionPermissions?.delete &&
      hasRuleMatch(sectionPermissions.delete, params)
    );
  };

  return {
    read: hasReadPermission(),
    edit: hasEditPermission(),
    create: hasCreatePermission(),
    delete: hasDeletePermission(),
  };
};
