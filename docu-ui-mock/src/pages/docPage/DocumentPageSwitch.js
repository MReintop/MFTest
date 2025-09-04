import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  mockDocType12973,
  mockDocType12976,
  sanitizeType,
} from './documentHelpers';
import GlobalNotifications from '../../components/GlobalNotifications';
import ReduxProvider from '../../providers/StoreProvider';
import Application12973Page from './application12973Page/Application12973Page';
import Permit12976Page from './permit12976Page/Permit12976Page';
import { setCurrentRole } from '../../store/globalUiSlice/globalUiSlice';

// Decides which page to render, based on documenNr
const DocumentPageSwitch = ({ currentRole }) => {
  const dispatch = useDispatch();

  const { docType } = useParams();

  useEffect(() => {
    console.log('SIIN', currentRole);
    dispatch(setCurrentRole(currentRole));
  }, [currentRole]);

  if (!docType) {
    return <>Laen andmeid...</>;
  }

  const isDocumentType = (code) => sanitizeType(code) === sanitizeType(docType);

  return (
    <>
      <GlobalNotifications />

      {isDocumentType(mockDocType12973) && <Application12973Page />}

      {isDocumentType(mockDocType12976) && <Permit12976Page />}
    </>
  );
};

const DocumentPageSwitchWithStore = (props) => {
  return (
    <ReduxProvider>
      <DocumentPageSwitch {...props} />
    </ReduxProvider>
  );
};

export default DocumentPageSwitchWithStore;
