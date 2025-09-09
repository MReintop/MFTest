import { TabRule } from '../../../../permissions/pagePermissionsConfig.interface';
import {
  TabType,
  Role,
  DocumentState,
} from '../../../../permissions/permissionsConstants';

const GeneralDataTab: TabRule = {
  tabName: TabType.GeneralData,
  showTab: [
    {
      role: [Role.AKPerson, Role.Proceeder, Role.Applicant],
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
      role: [Role.AKPerson, Role.Proceeder, Role.Applicant],
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
      role: [Role.Applicant, Role.Proceeder],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

export default [GeneralDataTab, FilesTab, PlanningTab];
