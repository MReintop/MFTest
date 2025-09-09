import { TabRule } from '../../../permissions/pagePermissionsConfig.interface';
import {
  TabType,
  Role,
  DocumentState,
} from '../../../permissions/permissionsConstants';

const DocumentGeneralDataTab: TabRule = {
  tabName: TabType.GeneralData,
  showTab: [
    {
      role: [Role.Proceeder, Role.AKPerson],
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
      role: [Role.Proceeder, Role.AKPerson],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

export default [DocumentGeneralDataTab, PlanningTab];
