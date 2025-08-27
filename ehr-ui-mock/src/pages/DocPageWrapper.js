import React, { Suspense, useEffect } from 'react';
import PageWrapper from '../components/components/PageWrapper';
import { useSelector, useStore } from 'react-redux';
import { somethingSelector } from '../store/ehrUiSlice';

const DocPage = React.lazy(() => import('DocuUI/DocPage'));

// Ainult see töötab
import('DocuUI/moduleInitializer');

const docSlice = await import('DocuUI/documentSlice');

// EI tööta
// const initDocumentUi = () => import('DocuUI/moduleInitializer');

const DocPageWrapper = () => {
  const store = useStore();

  const something = useSelector(somethingSelector);

  const initDocuUi = async () => {
    // EI tööta
    // const moduleInit = await import('DocuUI/moduleInitializer');
    // console.log('SIIN', moduleInit);
    // moduleInit.initModule();
    // initDocumentUi();
  };

  console.log('SIIN something ehrUi', something);

  useEffect(() => {
    console.log('SIIN', docSlice.documentSlice);
    store.reducerManager.add('document', docSlice.documentSlice.reducer);

    initDocuUi();
    console.log('SIIN', store.getState());
  }, []);

  return (
    <PageWrapper title="Document">
      <Suspense fallback={<>Laen andmeid ...</>}>
        <DocPage permissions={['W']} />
      </Suspense>
    </PageWrapper>
  );
};

export default DocPageWrapper;
