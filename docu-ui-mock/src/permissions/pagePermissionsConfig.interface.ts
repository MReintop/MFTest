import {
  PageName,
  PageSection,
  SectionHTMLElement,
  TabType,
  DocumentButtons,
  ProceedingButtons,
  OperationButtons,
  FooterButtons,
  Roles,
  Role,
  ProceedingState,
  ProceedingStage,
  DocumentState,
  OperationState,
  MENTOIMSEIS,
} from './permissionsConstants';

export interface PageViewConfig {
  pageName: PageName;
  documentType?: DocumentType;
  tabs?: TabRule[];
  sections: Section[];
  buttons?: ButtonRule[];
}

export interface TabRule {
  tabName: TabType;
  showTab: Rule[];
}

export interface Section {
  sectionName: PageSection | SectionHTMLElement;
  tabName?: TabType;
  create?: Rule[];
  read?: Rule[];
  edit?: Rule[];
  delete?: Rule[];
}

export type ButtonType =
  | DocumentButtons
  | ProceedingButtons
  | OperationButtons
  | FooterButtons;

export interface ButtonRule {
  buttonName: ButtonType;
  showButton: Rule[];
}

export interface Rule {
  role: Roles[] | Role[];
  proceedingState?: ProceedingState[];
  proceedingStage?: ProceedingStage[];
  documentState?: DocumentState[];
  operationState?: OperationState[] | MENTOIMSEIS[];
  overrideShowElementRuleFn?: Function;
}

export interface DocumentType {
  doty: number;
  name: string;
}
