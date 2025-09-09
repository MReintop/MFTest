import { TabRule } from '../../../permissions/pagePermissionsConfig.interface';
import {
  TabType,
  Role,
  DocumentState,
} from '../../../permissions/permissionsConstants';

const ProceedingGeneralDataTab: TabRule = {
  tabName: TabType.ProceedingGeneralData,
  showTab: [
    {
      role: [Role.AKPerson],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
    {
      role: [Role.Proceeder],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

const DocumentGeneralDataTab: TabRule = {
  tabName: TabType.GeneralData,
  showTab: [
    {
      role: [Role.AKPerson],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
    {
      role: [Role.Proceeder],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

const FilesTab: TabRule = {
  tabName: TabType.Files,
  showTab: [
    {
      role: [Role.AKPerson, Role.Proceeder],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

const PlanningTab: TabRule = {
  tabName: TabType.Planning,
  showTab: [
    {
      role: [Role.Proceeder],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

export default [
  ProceedingGeneralDataTab,
  DocumentGeneralDataTab,
  FilesTab,
  PlanningTab,
];
