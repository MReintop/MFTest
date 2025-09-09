import { Section } from '../../../permissions/pagePermissionsConfig.interface';
import {
  DocumentState,
  PageSection,
  Role,
  TabType,
} from '../../../permissions/permissionsConstants';

const DocumentGeneralDataSection: Section = {
  sectionName: PageSection.DocumentGeneralDataSection,
  tabName: TabType.GeneralData,
  read: [
    {
      role: [Role.Proceeder, Role.AKPerson],
      documentState: [
        DocumentState.ESITATUD,
        DocumentState.MENETLUSES,
        DocumentState.KOOSTAMISEL,
      ],
    },
  ],
};

const ProceedingGeneralDataSection: Section = {
  sectionName: PageSection.ProceedingGeneralDataSection,
  tabName: TabType.ProceedingGeneralData,
  edit: [
    {
      role: [Role.Proceeder],
      documentState: [DocumentState.KOOSTAMISEL, DocumentState.MENETLUSES],
    },
  ],
  read: [
    {
      role: [Role.Proceeder, Role.AKPerson],
      documentState: [
        DocumentState.ESITATUD,
        DocumentState.MENETLUSES,
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
      ],
    },
  ],
};

const PlanningGeneralDataSection: Section = {
  sectionName: PageSection.PlanningGeneralDataSection,
  tabName: TabType.Planning,
  edit: [
    {
      role: [Role.Proceeder],
      documentState: [DocumentState.KOOSTAMISEL, DocumentState.MENETLUSES],
    },
  ],
  read: [
    {
      role: [Role.Applicant, Role.Proceeder],
      documentState: [
        DocumentState.ESITATUD,
        DocumentState.MENETLUSES,
        DocumentState.KOOSTAMISEL,
      ],
    },
  ],
};

const PlanningAreaSection: Section = {
  sectionName: PageSection.PlanningAreaSection,
  tabName: TabType.Planning,
  edit: [
    {
      role: [Role.Proceeder],
      documentState: [DocumentState.KOOSTAMISEL, DocumentState.MENETLUSES],
    },
  ],
  read: [
    {
      role: [Role.Applicant, Role.Proceeder],
      documentState: [
        DocumentState.ESITATUD,
        DocumentState.MENETLUSES,
        DocumentState.KOOSTAMISEL,
      ],
    },
  ],
};

export default [
  ProceedingGeneralDataSection,
  DocumentGeneralDataSection,
  PlanningGeneralDataSection,
  PlanningAreaSection,
];
