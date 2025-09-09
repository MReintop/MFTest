import {
  ButtonRule,
  ButtonType,
  Rule,
  Section,
  TabRule,
} from '../pagePermissionsConfig.interface';
import { DocumentState, Role, TabType } from '../permissionsConstants';

export interface PermissionsConf {
  read?: boolean;
  edit?: boolean;
  create?: boolean;
  delete?: boolean;
}

const hasRuleMatch = (
  rules: Rule[],
  userRole: Role,
  documentState: DocumentState,
) => {
  return rules.some((rule: Rule) => {
    const roleMatches =
      // @ts-ignore
      Array.isArray(rule.role) && rule.role.includes(userRole);

    const documentStateMatches =
      rule.documentState?.includes(documentState) ?? false;

    return roleMatches && documentStateMatches;
  });
};

export const getShownTabs = (
  tabRules: TabRule[],
  documentState: DocumentState,
  userRole: Role,
): TabType[] => {
  return tabRules
    .filter((tabRule) => hasRuleMatch(tabRule.showTab, userRole, documentState))
    .map((tabRule) => tabRule.tabName);
};

export const getShownButtons = (
  buttonRules: ButtonRule[],
  documentState: DocumentState,
  userRole: Role,
): ButtonType[] => {
  return buttonRules
    .filter((rule: ButtonRule) =>
      hasRuleMatch(rule.showButton, userRole, documentState),
    )
    .map((tabRule) => tabRule.buttonName);
};

export const getSectionPermissions = (
  sectionPermissions: Section | undefined,
  documentState: DocumentState,
  userRole: Role,
): PermissionsConf => {
  const hasEditPermission = () => {
    return (
      sectionPermissions?.edit &&
      hasRuleMatch(sectionPermissions.edit, userRole, documentState)
    );
  };

  const hasReadPermission = () => {
    return (
      sectionPermissions?.read &&
      hasRuleMatch(sectionPermissions.read, userRole, documentState)
    );
  };

  const hasCreatePermission = () => {
    return (
      sectionPermissions?.create &&
      hasRuleMatch(sectionPermissions.create, userRole, documentState)
    );
  };

  const hasDeletePermission = () => {
    return (
      sectionPermissions?.delete &&
      hasRuleMatch(sectionPermissions.delete, userRole, documentState)
    );
  };

  return {
    read: hasReadPermission(),
    edit: hasEditPermission(),
    create: hasCreatePermission(),
    delete: hasDeletePermission(),
  };
};
