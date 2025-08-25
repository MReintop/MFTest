import React from 'react';
import PageWrapper from '../components/components/PageWrapper';
import { Suspense } from 'react';

const ProceedingPage = React.lazy(() => import('DocuUI/ProceedingPage'));
const ProceedingPageWrapper = () => {
  // Siin menetluse leht
  return (
    <PageWrapper title="Menetlus">
      <Suspense fallback={<>Laen andmeid ...</>}>
        <ProceedingPage permissions={['W']} />
      </Suspense>
    </PageWrapper>
  );
};

export default ProceedingPageWrapper;
