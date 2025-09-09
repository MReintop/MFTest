import { ButtonRule } from '../../../../permissions/pagePermissionsConfig.interface';
import {
  DocumentButtons,
  Role,
  DocumentState,
} from '../../../../permissions/permissionsConstants';

const SaveButton: ButtonRule = {
  buttonName: DocumentButtons.Save,
  showButton: [
    {
      role: [Role.Applicant],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

const SubmitButton: ButtonRule = {
  buttonName: DocumentButtons.Present,
  showButton: [
    {
      role: [Role.Applicant],
      documentState: [
        DocumentState.KOOSTAMISEL,
        DocumentState.MENETLUSES,
        DocumentState.ESITATUD,
      ],
    },
  ],
};

export default [SaveButton, SubmitButton];
