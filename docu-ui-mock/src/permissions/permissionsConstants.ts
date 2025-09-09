/* eslint-disable max-lines, no-shadow */

export enum MENTOIMSEIS {
  MENTOIMSEIS_LOPETATUD = 'MENTOIMSEIS_LOPETATUD',
  MENTOIMSEIS_ARHIIVIS = 'MENTOIMSEIS_ARHIIVIS',
  MENTOIMSEIS_TYISTATUD = 'MENTOIMSEIS_TYISTATUD',
  MENTOIMSEIS_EDASTATUD = 'MENTOIMSEIS_EDASTATUD',
  MENTOIMSEIS_TEOSTAMISEL = 'MENTOIMSEIS_TEOSTAMISEL',
  MENTOIMSEIS_TYHISTATUD = 'MENTOIMSEIS_TYHISTATUD',
  MENTOIMSEIS_VALMIS = 'MENTOIMSEIS_VALMIS',
  MENTOIMSEIS_KEELDUTUD = 'MENTOIMSEIS_KEELDUTUD',
  MENTOIMSEIS_KOOSKOLA = 'MENTOIMSEIS_KOOSKOLA',
  MENTOIMSEIS_KOOSKOLA_MARK = 'MENTOIMSEIS_KOOSKOLA_MARK',
  MENTOIMSEIS_OOTEL = 'MENTOIMSEIS_OOTEL',
  MENTOIMSEIS_TAGASI_LYKATUD = 'MENTOIMSEIS_TAGASI_LYKATUD',
  MENTOIMSEIS_ADS = 'MENTOIMSEIS_ADS',
  MENTOIMSEIS_ADS_ESITAMATA = 'MENTOIMSEIS_ADS_ESITAMATA',
  MENTOIMSEIS_ADS_JOUSTUNUD = 'MENTOIMSEIS_ADS_JOUSTUNUD',
  MENTOIMSEIS_ADS_KONTROLL = 'MENTOIMSEIS_ADS_KONTROLL',
  MENTOIMSEIS_ADS_PROBLEEM = 'MENTOIMSEIS_ADS_PROBLEEM',
  MENTOIMSEIS_ADS_TOOTL_PROBLEEM = 'MENTOIMSEIS_ADS_TOOTL_PROBLEEM',
  MENTOIMSEIS_ADS_TYHISTATUD = 'MENTOIMSEIS_ADS_TYHISTATUD',
  MENTOIMSEIS_ADS_TYISTATUD = 'MENTOIMSEIS_ADS_TYISTATUD',
  MENTOIMSEIS_VANA_VERSIOON = 'MENTOIMSEIS_VANA_VERSIOON',
  MENTOIMSEIS_LOOBUTUD = 'MENTOIMSEIS_LOOBUTUD',
  MENTOIMSEIS_TEOSTATUD = 'MENTOIMSEIS_TEOSTATUD',
  MENTOIMSEIS_KOOSTAMISEL = 'MENTOIMSEIS_KOOSTAMISEL',
  MENTOIMSEIS_TAHTAEG_MOODUNUD = 'MENTOIMSEIS_TAHTAEG_MOODUNUD',

  /** Kooskõlastamise raames kasutatav. Piiratud võimalikud tegevused (jätkumärkus). */
  MENTOIMSEIS_JATKAMINE = 'MENTOIMSEIS_JATKAMINE',
}

export enum ViewRights {
  Read = 'READ',
  Edit = 'EDIT',
}

export enum TabType {
  GeneralData = 'GeneralData',
  Files = 'Files',
  Planning = 'Planning',
  ProceedingGeneralData = 'ProceedingGeneralData',
}

export const tabTitles = {
  [TabType.ProceedingGeneralData]: 'Menetluse üldinfo',
  [TabType.GeneralData]: 'Dokumendi üldinfo',
  [TabType.Files]: 'Failid',
  [TabType.Planning]: 'Planeering',
};

export enum Roles {
  // eslint-disable-next-line no-unused-vars
  ROLE_VIEWER = 'VIEWER',
  // eslint-disable-next-line no-unused-vars
  ROLE_APPLICANT = 'APPLICANT',
  // eslint-disable-next-line no-unused-vars
  ROLE_APPLICANT_KOV = 'APPLICANT_KOV',
  // eslint-disable-next-line no-unused-vars
  ROLE_KOV = 'KOV',
  // eslint-disable-next-line no-unused-vars
  ROLE_MKM = 'MKM',
  // eslint-disable-next-line no-unused-vars
  ROLE_TJA = 'TJA',
  ROLE_PROCEEDER = 'PROCEEDER',
  ROLE_PROCEEDER_VIEWER = 'PROCEEDER_VIEWER',
  ROLE_SIGNER = 'SIGNER',
  ROLE_COORDINATOR = 'COORDINATOR',
  ROLE_COORDINATOR_VIEWER = 'COORDINATOR_VIEWER',
  ROLE_COMMENTER = 'COMMENTER',
  ROLE_COMMENTER_VIEWER = 'COMMENTER_VIEWER',
  ROLE_INVOLVED = 'ROLE_INVOLVED',
  ROLE_KT = 'KT',
  ROLE_N = 'N',
}

export enum PageName {
  AdministrativeActProceeding = 'AdministrativeActProceeding',
  GeneralProceedingOperation = 'GeneralProceedingOperation',
  OperationView = 'OperationView',
  Document = 'Document',
  Planning = 'Planning',
}

export enum TabName {
  AdministrativeActProceeding = 'AdministrativeActProceeding',
  RelatedBuildings = 'RelatedBuildings',
  ConditionsBuildings = 'ConditionsBuildings',
  FulfillOperatiopermin = 'FulfillOperation',
}

export enum PageSection {
  DocumentGeneralDataSection = 'DocumentGeneralDataSection',
  ProceedingGeneralDataSection = 'ProceedingGeneralDataSection',

  PlanningGeneralDataSection = 'PlanningGeneralDataSection',
  PlanningAreaSection = 'PlanningAreaSection',
}

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

export enum DocumentState {
  KOOSTAMISEL = 'DO_DOKUSEIS_KOOSTAMISEL',
  ESITATUD = 'DO_DOKUSEIS_ESITATUD',
  MENETLUSES = 'DO_DOKUSEIS_MENETLUSES',
  TAIENDAMISEL = 'DO_DOKUSEIS_TAIENDAMISEL',
  REG_KANTUD = 'DO_DOKUSEIS_REG_KANTUD',
  ALLKIRJASTAMISEL = 'DO_DOKUSEIS_ALLKIRJASTAMISEL',
  VANA_VERSIOON = 'DO_DOKUSEIS_VANA_VERSIOON',
}

export enum ProceedingState {
  KAIMASOLEV = 'MENSEIS_TEHN_KAIMASOLEV',
  AKT_ALGATATUD = 'MENSEIS_TEHN_AKT_KOOSTATUD',
  AKT_KOOSTAMINE = 'MENSEIS_TEHN_AKT_KOOSTAMINE',
  TAOT_MUUTMINE = 'MENSEIS_TEHN_TAOT_MUUTMINE',
  LOPETATUD = 'MENSEIS_TEHN_LOPETATUD',
  MENSEIS_KAIMASOLEV = 'MENSEIS_KAIMASOLEV',
  MENSEIS_LOPETATUD = 'MENSEIS_LOPETATUD',
  MENSEIS_TAIENDAMISEL = 'MENSEIS_TAIENDAMISEL',
}

export enum OperationState {
  KAIMASOLEV = 'MENSEIS_TEHN_KAIMASOLEV',
  AKT_ALGATATUD = 'MENSEIS_TEHN_AKT_KOOSTATUD',
  AKT_KOOSTAMINE = 'MENSEIS_TEHN_AKT_KOOSTAMINE',
  TAOT_MUUTMINE = 'MENSEIS_TEHN_TAOT_MUUTMINE',
  LOPETATUD = 'MENSEIS_TEHN_LOPETATUD',
  MENSEIS_KAIMASOLEV = 'MENSEIS_KAIMASOLEV',
  MENSEIS_LOPETATUD = 'MENSEIS_LOPETATUD',
  MENSEIS_TAIENDAMISEL = 'MENSEIS_TAIENDAMISEL',
}

export enum OperationButtons {
  QuitOperation = 'QuitOperation',
  SubmitOperation = 'SubmitOperation',
  SaveOperation = 'SaveOperation',
  SubmitOperationWithoutComments = 'SubmitOperationWithoutComments',
  BackToDashboard = 'BackToDashboard',
  SaveDisclosureButton = 'SaveDisclosureButton',
}

export enum ProceedingButtons {
  NewDecision = 'NewDecision',
  startNewCircle = 'StartNewCircle',
  BackToDashboard = 'BackToDashboard',
  ReturnForAdditions = 'ReturnForAdditions',
  KmhConfirmation = 'KmhConfirmation',
}

export enum DocumentButtons {
  Save = 'Save',
  Sign = 'Sign',
  Present = 'Present',
  PresentAgain = 'PresentAgain',
  PresentAsKov = 'PresentAsKov',
  SubmitExternalSignDoc = 'SubmitExternalSignDoc',
  ToSigning = 'ToSigning',
  CancelSigning = 'CancelSigning',
  BackToDashboard = 'BackToDashboard',
  DownloadPdfButton = 'DownloadPdfButton',
  DecisionToRegistryButton = 'decisionToRegistryButton',
}

export enum FooterButtons {
  Save = 'Save',
  Sign = 'Sign',
  Present = 'Present',
  PresentAgain = 'PresentAgain',
  PresentAsKov = 'PresentAsKov',
  SubmitExternalSignDoc = 'SubmitExternalSignDoc',
  ToSigning = 'ToSigning',
  CancelSigning = 'CancelSigning',
  BackToDashboard = 'BackToDashboard',
  DownloadPdfButton = 'DownloadPdfButton',
  DecisionToRegistryButton = 'decisionToRegistryButton',
}

export enum ProceedingStage {
  ALGATATUD = 'MENETAPP_ALGATATUD',
  ALGATAMISE_OTSUS = 'MENETAPP_ALGATAMISE_OTSUS',
  KMH_PROGRAMM = 'MENETAPP_KMH_PROGRAMM',
  KMH_ARUANNE = 'MENETAPP_KMH_ARUANNE',
  ALA_EHIT_PLAN = 'MENETAPP_ALA_EHIT_PLAN',
  AVALIKUSTAMINE = 'MENETAPP_AVALIKUSTAMINE',
}

export enum SectionHTMLElement {
  SEARCH_BTN,
}
