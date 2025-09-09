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

export default [ProceedingGeneralDataSection, DocumentGeneralDataSection];
