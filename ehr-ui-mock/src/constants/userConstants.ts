export enum Role {
  Proceeder = 'PROCEEDER',
  ProceederViewer = 'PROCEEDER_VIEWER',
  Unauthorized = 'UNAUTHORIZED',
  Applicant = 'APPLICANT',
  ApplicantViewer = 'APPLICANT_VIEWER',
  Viewer = 'VIEWER',
  ApplicantKov = 'APPLICANT_KOV',
  Coordinator = 'COORDINATOR',
  CoordinatorViewer = 'COORDINATOR_VIEWER',
  Involved = 'INVOLVED',
  InvolvedViewer = 'INVOLVED_VIEWER',
  Commenter = 'COMMENTER',
  CommenterViewer = 'COMMENTER_VIEWER',
  AKPerson = 'AK_PERSON',
  NotAuthenticated = 'NOT_AUTHENTICATED',
  MKM = 'MKM',
  JurViewer = 'JUR_VIEWER',
}

export const roles = [Role.AKPerson, Role.Applicant, Role.Proceeder];
